import { UserType } from '@/common/types/user';
import { apiSlice } from '../apiSlice';

export const restApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: ({ page, searchName, listShow }: { page: number, searchName: string, listShow : string }) => `/users?page=${page}&name=${searchName}&per_page=${listShow}`,
        }),
        createUser: builder.mutation({
            query: (data: UserType) => ({
                url: '/users',
                method: 'POST',
                body: data,
            }),
        }),
        updateUser: builder.mutation({
            query: (data : UserType) => ({
                url: `/users/${data.id}`,
                method: 'PUT',
                body: data,
            }),
        }),
        deleteUser: builder.mutation({
            query: (userId: string) => ({
                url: `/users/${userId}`,
                method: 'DELETE',
            }),
        }),
        getPost: builder.query({
            query: () => `/posts`,
        }),
        getPostComments: builder.query({
            query: (postId: number) => `/posts/${postId}/comments`,
        }),
    }),
});

export const { 
    useGetUserQuery,
    useGetPostQuery,
    useGetPostCommentsQuery,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useCreateUserMutation,
} = restApi;
