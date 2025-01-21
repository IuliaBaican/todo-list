import { TodoItemsDb } from '../data-access';
import { ItemDTO } from '../data-access/todo-items-db';
import { makeTodoItem } from '../models';

type BuildAddItemDependencies = {
  todoItemsDb: TodoItemsDb;
};

export const makeAddTodoItem =
  ({ todoItemsDb }: BuildAddItemDependencies) =>
  async (todoItem: ItemDTO) => {
    try {
      const itemToAdd = makeTodoItem(todoItem);
      const newItem = await todoItemsDb.addItem(itemToAdd);
      return Promise.resolve(newItem);
    } catch (error) {
      return Promise.reject(error);
    }
  };
