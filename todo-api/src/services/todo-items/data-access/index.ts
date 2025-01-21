import { makeDb, removeUnset } from '../../../data-access';
import { makeItemsDb } from './todo-items-db';

export const todoItemsDb = makeItemsDb({ makeDb, removeUnset });
export type TodoItemsDb = typeof todoItemsDb;
