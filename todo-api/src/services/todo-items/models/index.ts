import { buildMakeItem } from './todo-item';

export const makeTodoItem = buildMakeItem();
export type TodoItem = ReturnType<typeof makeTodoItem>;
