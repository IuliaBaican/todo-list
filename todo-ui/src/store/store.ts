import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import { clientOnlyMiddleware } from './middlewares/clientOnlyMiddleware';
import { todosApi } from './api/todosApi';

const rootReducer = combineReducers({
  todos: todoReducer,
  [todosApi.reducerPath]: todosApi.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(todosApi.middleware)
        .concat([clientOnlyMiddleware]),
    preloadedState,
  });

export const store = setupStore();
export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
