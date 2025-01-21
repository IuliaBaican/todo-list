import { todoItemsService } from '../use-cases';
import { makeAddTodoItem } from './add-item';
import { makeDeleteTodoItem } from './delete-item';
import { makeGetTodoItem } from './get-item';
import { makeGetAllTodoItems } from './get-items';
import { makeUpdateTodoItem } from './update-item';

const getAllTodoItems = makeGetAllTodoItems({ todoItemsService });
const addItem = makeAddTodoItem({ todoItemsService });
const updatedItem = makeUpdateTodoItem({ todoItemsService });
const getItem = makeGetTodoItem({ todoItemsService });
const deleteItem = makeDeleteTodoItem({ todoItemsService });

export const todoItemsControllers = Object.freeze({
  getAllTodoItems,
  addItem,
  updatedItem,
  getItem,
  deleteItem,
});
