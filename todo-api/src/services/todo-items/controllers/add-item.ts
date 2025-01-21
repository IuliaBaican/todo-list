import { NextFunction, Request, Response } from 'express';
import { TodoItemsService } from '../use-cases';

type MakeAddTodoItemDep = {
  todoItemsService: TodoItemsService;
};

export const makeAddTodoItem = ({ todoItemsService }: MakeAddTodoItemDep) => {
  return async (
    httpRequest: Request,
    httpResponse: Response,
    next: NextFunction,
  ) => {
    try {
      const { todoItem } = httpRequest.body;
      const item = await todoItemsService.addItem(todoItem);
      httpResponse.status(200).send(item);
    } catch (e) {
      next(e);
    }
  };
};
