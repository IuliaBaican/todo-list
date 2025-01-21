import { NextFunction, Request, Response } from 'express';
import { TodoItemsService } from '../use-cases';

type MakeGetTodoItemDep = {
  todoItemsService: TodoItemsService;
};

export const makeGetTodoItem = ({ todoItemsService }: MakeGetTodoItemDep) => {
  return async (
    httpRequest: Request<{ id: string }>,
    httpResponse: Response,
    next: NextFunction,
  ) => {
    try {
      const id = httpRequest.params.id;
      const todoItem = await todoItemsService.getItem(id);
      httpResponse.status(200).send(todoItem);
    } catch (e) {
      next(e);
    }
  };
};
