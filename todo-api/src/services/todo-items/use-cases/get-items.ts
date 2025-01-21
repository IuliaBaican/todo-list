import { TodoItemsDb } from '../data-access';
import { ItemDTO } from '../data-access/todo-items-db';

type BuildGetItemsDependencies = {
  todoItemsDb: TodoItemsDb;
};

export const makeGetAllTodoItems =
  ({ todoItemsDb }: BuildGetItemsDependencies) =>
  async (): Promise<ItemDTO[]> => {
    try {
      const allItemsFromDb = await todoItemsDb.getAllTodoItems();
      return Promise.resolve(allItemsFromDb);
    } catch (error) {
      return Promise.reject(error);
    }
  };
