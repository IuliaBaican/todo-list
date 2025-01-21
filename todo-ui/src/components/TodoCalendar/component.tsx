import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Todo } from '@types';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

type TodoCalendarProps = {
  todos: Todo[];
  onEdit: (todo: Todo) => void;
};
export const TodoCalendar = ({ todos, onEdit }: TodoCalendarProps) => {
  const myEventsList = todos.map((todo) => {
    const dueDate = todo.dueDate ? new Date(todo.dueDate) : new Date();
    return {
      title: todo.title,
      start: dueDate,
      end: dueDate,
      todo,
    };
  });

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(event) => onEdit(event.todo)}
        style={{ height: 500 }}
      />
    </div>
  );
};
