import { todoItemsDb } from '../data-access';
import { makeAddTodoItem } from './add-item';
import { makeDeleteTodoItem } from './delete-item';
import { makeGetTodoItem } from './get-item';
import { makeGetAllTodoItems } from './get-items';
import { makeUpdateTodoItem } from './update-item';

const getAllTodoItems = makeGetAllTodoItems({ todoItemsDb });
const addItem = makeAddTodoItem({ todoItemsDb });
const updateItem = makeUpdateTodoItem({ todoItemsDb });
const getItem = makeGetTodoItem({ todoItemsDb });
const deleteItem = makeDeleteTodoItem({ todoItemsDb });

export type TodoItemsService = {
  getAllTodoItems: typeof getAllTodoItems;
  addItem: typeof addItem;
  updateItem: typeof updateItem;
  getItem: typeof getItem;
  deleteItem: typeof deleteItem;
};

export const todoItemsService: TodoItemsService = Object.freeze({
  getAllTodoItems,
  addItem,
  updateItem,
  getItem,
  deleteItem,
});
