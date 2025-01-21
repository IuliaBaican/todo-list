import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '@types';

type TodoListState = { todoList: Todo[] } | { todoList: null };
const initialState: TodoListState = { todoList: null };

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoList: (state: TodoListState, action: PayloadAction<Todo[]>) => {
      state.todoList = { ...state.todoList, ...action.payload };
    },

    clearTodoList: (state: TodoListState) => {
      state.todoList = null;
    },
  },
});

export const { setTodoList, clearTodoList } = todoSlice.actions;
export default todoSlice.reducer;
