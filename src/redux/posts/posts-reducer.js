import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addPostSuccess,
  deletePostSuccess,
  updatePostSuccess,
  fetchPostsSuccess,
  retrievePostSuccess
} from './posts-actions';

const items = createReducer([], {
  [fetchPostsSuccess]: (_, { payload }) => [...payload],
  [addPostSuccess]: (state, { payload }) => [...state, payload],
  [deletePostSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [updatePostSuccess]: (state, { payload }) =>
    state.map(post => (post.id === payload.id ? payload : post)),
  [retrievePostSuccess]: (_, { payload }) => [...payload]
});

// const error = createReducer(null, {});

export default combineReducers({
  items

  // error
});
