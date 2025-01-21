import { NextFunction, Request, Response } from 'express';
import { TodoItemsService } from '../use-cases';

type MakeGetAllTodoItemsDep = {
  todoItemsService: TodoItemsService;
};

export const makeGetAllTodoItems = ({
  todoItemsService,
}: MakeGetAllTodoItemsDep) => {
  return async (
    _httpRequest: Request,
    httpResponse: Response,
    next: NextFunction,
  ) => {
    try {
      const allTodoItems = await todoItemsService.getAllTodoItems();
      httpResponse.status(200).send(allTodoItems);
    } catch (e) {
      next(e);
    }
  };
};
