import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  // addPostRequest,
  // addPostSuccess,
  // addPostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
  // changeFilter,
  // toggleCompletedRequest,
  // toggleCompletedSuccess,
  // toggleCompletedError,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError
} from './posts-actions';

const items = createReducer([], {
  [fetchPostsSuccess]: (_, { payload }) => [...payload],
  // [addPostSuccess]: (state, { payload }) => [...state, payload],
  [deletePostSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload)
  // [toggleCompletedSuccess]: (state, { payload }) =>
  //   state.map(Post => (Post.id === payload.id ? payload : Post))
});

const loading = createReducer(false, {
  [fetchPostsRequest]: () => true,
  [fetchPostsSuccess]: () => false,
  [fetchPostsError]: () => false,
  // [addPostRequest]: () => true,
  // [addPostSuccess]: () => false,
  // [addPostError]: () => false,
  [deletePostRequest]: () => true,
  [deletePostSuccess]: () => false,
  [deletePostError]: () => false
  // [toggleCompletedRequest]: () => true,
  // [toggleCompletedSuccess]: () => false,
  // [toggleCompletedError]: () => false
});

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload
// });

// const error = createReducer(null, {});

export default combineReducers({
  items,
  // filter,
  loading
  // error
});
