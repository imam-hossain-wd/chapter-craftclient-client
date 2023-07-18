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
    getLimitedBooks : builder.query({
        query: ()=> "/books/?limit=10",
        providesTags:['books']
    }),
    SingleBooks : builder.query({
        query: (id)=> `/books/book/${id}`,
        providesTags:['books']
    }),
    editSingleBooks : builder.query({
        query: (id)=> `/books/book/${id}`,
        providesTags:['books']
    }),
    checkoutBook : builder.query({
        query: (id)=> `/books/book/${id}`,
        providesTags:['books']
    }),
    addBook : builder.mutation({
      query:(data)=> ({
        url:`/books/create-book`,
        method: 'POST',
        body: data
      }),
      invalidatesTags:['books']
    }),
    postComment : builder.mutation({
      query:( { id, rating, comment })=> ({
        url:`/books/reviews/${id}`,
        method: 'POST',
        body: {rating, comment}
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
        method: 'PATCH',
      }),
    //   invalidatesTags: ['books'],
    onQueryStarted(id, { dispatch, queryFulfilled }) {
      dispatch(api.util.invalidateTags(['books']));
    },
    }),

    
  })
});

export const {useGetBooksQuery, useSingleBooksQuery, useEditSingleBooksQuery, useAddBookMutation, useDeleteBookMutation, useCheckoutBookQuery,useGetLimitedBooksQuery, useUpdateBookMutation, usePostCommentMutation} = api;