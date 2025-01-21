import { NextFunction, Request, Response } from 'express';
import { TodoItemsService } from '../use-cases';

type MakeUpdateTodoItemDep = {
  todoItemsService: TodoItemsService;
};

export const makeUpdateTodoItem = ({
  todoItemsService,
}: MakeUpdateTodoItemDep) => {
  return async (
    httpRequest: Request<{ id: string }>,
    httpResponse: Response,
    next: NextFunction,
  ) => {
    try {
      const id = httpRequest.params.id;
      const { todoItem } = httpRequest.body;
      const updatedItem = await todoItemsService.updateItem(id, todoItem);
      httpResponse.status(200).send(updatedItem.getData());
    } catch (e) {
      next(e);
    }
  };
};
