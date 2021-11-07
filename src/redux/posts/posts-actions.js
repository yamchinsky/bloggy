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

export const toggleCompletedRequest = createAction(
  'posts/toggleCompletedRequest'
);
export const toggleCompletedSuccess = createAction(
  'posts/toggleCompletedSuccess'
);
export const toggleCompletedError = createAction('posts/toggleCompletedError');

// export const changeFilter = createAction('posts/changeFilter');
