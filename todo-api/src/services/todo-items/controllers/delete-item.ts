import { NextFunction, Request, Response } from 'express';
import { TodoItemsService } from '../use-cases';

type MakeDeleteTodoItemDep = {
  todoItemsService: TodoItemsService;
};

export const makeDeleteTodoItem = ({
  todoItemsService,
}: MakeDeleteTodoItemDep) => {
  return async (
    httpRequest: Request<{ id: string }>,
    httpResponse: Response,
    next: NextFunction,
  ) => {
    try {
      const id = httpRequest.params.id;
      await todoItemsService.deleteItem(id);
      httpResponse.status(200).send(`item with id: ${id} deleted successfully`);
    } catch (e) {
      next(e);
    }
  };
};
