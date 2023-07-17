import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:5000/api/v1/'}),
  tagTypes: ['books'],
  endpoints: (builder) => ({
    getBooks : builder.query({
        query: ()=> "/books",
        providesTags:['books']
    }),
    SingleBooks : builder.query({
        query: (id)=> `/books/${id}`,
    }),
    editSingleBooks : builder.query({
        query: (id)=> `/books/${id}`,
    }),
    checkoutBook : builder.query({
        query: (id)=> `/books/${id}`,
    }),
    addBook : builder.mutation({
      query:(data)=> ({
        url:`/books/create-book`,
        method: 'POST',
        body: data
      }),
      invalidatesTags:['books']
    }),
    updateBook: builder.mutation({
      query: ({id, ...data}) => ({
        url: `books/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['books'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),
    
  })
});

export const {useGetBooksQuery, useSingleBooksQuery, useEditSingleBooksQuery, useAddBookMutation, useDeleteBookMutation, useCheckoutBookQuery, useUpdateBookMutation} = api;