import { TodoItemsDb } from '../data-access';

type BuildDeleteItemDependencies = {
  todoItemsDb: TodoItemsDb;
};

export const makeDeleteTodoItem =
  ({ todoItemsDb }: BuildDeleteItemDependencies) =>
  async (id: string): Promise<string> => {
    try {
      const deleted = await todoItemsDb.deleteItem(id);
      if (!deleted) {
        return Promise.reject(new Error('Item not found'));
      }
      return Promise.resolve('ok');
    } catch (e) {
      return Promise.reject(e);
    }
  };
