import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo } from '@types';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  tagTypes: ['Todos'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    getItemById: builder.query({
      query: (id: string) => ({
        url: `/items/${id}`,
        method: 'GET',
      }),
    }),
    getAllItems: builder.query({
      providesTags: ['Todos'],
      query: () => ({
        url: `/items`,
        method: 'GET',
      }),
    }),
    addItem: builder.mutation({
      invalidatesTags: ['Todos'],
      query: (todoItem: Todo) => ({
        url: `/items/new`,
        method: 'POST',
        body: { todoItem: todoItem },
      }),
    }),
    updateItem: builder.mutation({
      invalidatesTags: ['Todos'],
      query: (payload: { id: string; todoItem: Todo }) => ({
        url: `/items/${payload.id}`,
        method: 'PUT',
        body: { todoItem: payload.todoItem },
      }),
    }),
    deleteItem: builder.mutation({
      invalidatesTags: ['Todos'],
      query: (id: string) => ({
        url: `/items/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetItemByIdQuery,
  useGetAllItemsQuery,
  useAddItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = todosApi;
