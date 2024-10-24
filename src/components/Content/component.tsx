import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Item } from '../Item/component';
import { RootState } from '../../types/types';

export const Content = () => {
  const todos = useSelector((state: RootState) => state.todo.todoList);
  const filterStatus = useSelector(
    (state: RootState) => state.todo.filterStatus,
  );

  const filteredTodos = todos
    .filter((todo) => {
      if (
        filterStatus.status !== 'all' &&
        todo.status !== filterStatus.status
      ) {
        return false;
      }

      if (
        filterStatus.priority !== 'all' &&
        todo.priority !== filterStatus.priority
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (filterStatus.sortBy === 'date-newest') {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (filterStatus.sortBy === 'date-oldest') {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      } else if (filterStatus.sortBy === 'priority') {
        const priorityOrder: { [key: string]: number } = {
          high: 1,
          medium: 2,
          low: 3,
        };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return 0;
    });

  return (
    <Container
      sx={{
        backgroundColor: 'lightBlue',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo, index) => (
          <Item todo={todo} key={`${todo.title}-${index}`} />
        ))
      ) : (
        <Typography>No tasks found.</Typography>
      )}
    </Container>
  );
};
