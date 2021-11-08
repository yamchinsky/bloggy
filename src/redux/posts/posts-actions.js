import { createAction } from '@reduxjs/toolkit';

export const fetchPostsRequest = createAction('posts/fetchPostsRequest');
export const fetchPostsSuccess = createAction('posts/fetchPostsSuccess');
export const fetchPostsError = createAction('posts/fetchPostsError');

export const addPostRequest = createAction('posts/addPostRequest');
export const addPostSuccess = createAction('posts/addPostSuccess');
export const addPostError = createAction('posts/addPostError');

export const deletePostRequest = createAction('posts/deletePostRequest');
export const deletePostSuccess = createAction('posts/deletePostsuccess');
export const deletePostError = createAction('posts/deletePostError');

export const updatePostRequest = createAction('posts/updatePostRequest');
export const updatePostSuccess = createAction('posts/updatePostSuccess');
export const updatePostError = createAction('posts/updatePostError');
