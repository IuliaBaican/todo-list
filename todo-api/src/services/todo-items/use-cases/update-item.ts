import { TodoItemsDb } from '../data-access';
import { ItemDTO } from '../data-access/todo-items-db';
import { makeTodoItem, TodoItem } from '../models';

type BuildUpdateItemDependencies = {
  todoItemsDb: TodoItemsDb;
};

export const makeUpdateTodoItem =
  ({ todoItemsDb }: BuildUpdateItemDependencies) =>
  async (id: string, updates: Partial<ItemDTO>): Promise<TodoItem> => {
    try {
      const itemDTO: ItemDTO | null = await todoItemsDb.getItem(id);
      if (!itemDTO) {
        return Promise.reject(new Error('Item not found'));
      }

      const item = makeTodoItem({ ...itemDTO, ...updates });
      const updatedItem = await todoItemsDb.updateItem(item);
      if (!updatedItem) {
        return Promise.reject(new Error('Item not found'));
      }
      return Promise.resolve(makeTodoItem(updatedItem));
    } catch (error) {
      return Promise.reject(error);
    }
  };
