export type MakeTodoItemData = {
  id: string;
  title: string;
  status: 'complete' | 'incomplete';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
};

export const buildMakeItem = () => (todoItemData: MakeTodoItemData) => {
  const { id, title, status, priority, dueDate, createdAt } = todoItemData;

  return Object.freeze({
    getId: (): string => id,
    getTitle: (): string => title,
    getStatus: (): 'complete' | 'incomplete' => status,
    getPriority: (): 'low' | 'medium' | 'high' => priority,
    getDueDate: (): string | undefined => dueDate,
    getCreatedAt: (): string | undefined => createdAt,
    getData: () => ({
      id: todoItemData.id,
      title: todoItemData.title,
      status: todoItemData.status,
      priority: todoItemData.priority,
      dueDate: todoItemData.dueDate,
      createdAt: todoItemData.createdAt,
    }),
  });
};
