export type Todo = {
  id: string;
  title: string;
  status: 'complete' | 'incomplete';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
};

export type FilterStatus = {
  status: string;
  priority: string;
  sortBy: string;
};

export type RootState = {
  todo: {
    todoList: Todo[];
    filterStatus: {
      status: 'all' | 'complete' | 'incomplete';
      priority: 'all' | 'high' | 'medium' | 'low';
      sortBy: 'date-newest' | 'date-oldest' | 'priority';
    };
  };
};
