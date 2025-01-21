import { TodoItemsDb } from '../data-access';
import { ItemDTO } from '../data-access/todo-items-db';

type BuildGetItemDependencies = {
  todoItemsDb: TodoItemsDb;
};

export const makeGetTodoItem =
  ({ todoItemsDb }: BuildGetItemDependencies) =>
  async (id: string): Promise<ItemDTO> => {
    try {
      const itemFromDb = await todoItemsDb.getItem(id);
      if (!itemFromDb) {
        return Promise.reject(new Error('Item not found'));
      }
      return Promise.resolve(itemFromDb);
    } catch (error) {
      return Promise.reject(error);
    }
  };
