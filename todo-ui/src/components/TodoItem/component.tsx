import { Delete, Edit } from '@mui/icons-material';
import {
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  Typography,
  Checkbox,
} from '@mui/material';
import { Todo } from '@types';
import {
  useDeleteItemMutation,
  useUpdateItemMutation,
} from '@store/api/todosApi';

type TodoItemProps = {
  todo: Todo;
  onEdit?: () => void;
};

const getColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'error';
    case 'medium':
      return 'warning';
    case 'low':
      return 'success';
    default:
      return 'default';
  }
};

export const TodoItem = ({ todo, onEdit }: TodoItemProps) => {
  const [updateItem] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();

  const handleCheck = (
    _e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    const newStatus: 'incomplete' | 'complete' = !checked
      ? 'incomplete'
      : 'complete';
    const updatedItem = { ...todo, status: newStatus };
    updateItem({ id: todo.id, todoItem: updatedItem });
  };

  const handleDelete = () => {
    deleteItem(todo.id);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: 2,
      }}
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={todo.status === 'complete'}
              onChange={handleCheck}
            />
          }
          label={
            <Typography color={getColor(todo.priority)}>
              {todo.title}
            </Typography>
          }
        />
      </FormGroup>
      <div>
        <Button onClick={handleDelete}>
          <Delete />
        </Button>
        <Button onClick={onEdit}>
          <Edit />
        </Button>
      </div>
    </Container>
  );
};
