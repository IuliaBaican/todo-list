import { Router } from 'express';
import { todoItemsControllers } from './controllers';

export const todoItemRoutes = () => {
  const router = Router();

  router.route('/').get(todoItemsControllers.getAllTodoItems);
  router.route('/new').post(todoItemsControllers.addItem);
  router.route('/:id').get(todoItemsControllers.getItem);
  router.route('/:id').put(todoItemsControllers.updatedItem);
  router.route('/:id').delete(todoItemsControllers.deleteItem);

  return router;
};
