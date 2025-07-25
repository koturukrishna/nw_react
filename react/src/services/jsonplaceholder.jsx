import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const jsonAPi = createApi({
  reducerPath: "jsonplaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5050/api/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users/`,
    }),
    getUser: builder.query({
      query: (id) => `user/${id}`,
    }),
    addUser: builder.mutation({
      query: (newTodo) => ({
        url: `user/`,
        method: "POST",
        body: newTodo,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...updatedTodo }) => ({
        url: `user/${id}`,
        method: "PUT",
        body: updatedTodo,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `user/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = jsonAPi;
