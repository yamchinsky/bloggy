import axios from 'axios';
import {
  addPostRequest,
  addPostSuccess,
  addPostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
  updatePostRequest,
  updatePostSuccess,
  updatePostError,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  retrievePostSuccess,
  retrievePostError
} from './posts-actions';
import { getId } from './posts-selectors';

axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com/';

// GET @ /posts
const fetchPosts = () => async dispatch => {
  dispatch(fetchPostsRequest());

  try {
    const { data } = await axios.get('/posts');

    dispatch(fetchPostsSuccess(data));
  } catch (error) {
    dispatch(fetchPostsError(error.message));
  }
};

// POST @ /posts
const addPost = title => async dispatch => {
  dispatch(addPostRequest());
  const post = {
    title
  };

  dispatch(addPostRequest());

  axios
    .post('/posts', post)
    .then(({ data }) => dispatch(addPostSuccess(data)))
    .catch(error => dispatch(addPostError(error.message)));
};

// DELETE @ /posts/:id
const deletePost = id => dispatch => {
  dispatch(deletePostRequest());

  axios
    .delete(`/posts/${id}`)
    .then(() => dispatch(deletePostSuccess(id)))
    .catch(error => dispatch(deletePostError(error.message)));
};

// PUT @ /posts/:id
const updatePost = values => async (dispatch, getState) => {
  console.log(values);
  dispatch(updatePostRequest());
  try {
    const id = getId(getState());
    const res = await axios.put(`/posts/${id}`, values);
    dispatch(updatePostSuccess(res.data));
  } catch (error) {
    dispatch(updatePostError(error.message));
  }
};

// GET @ /posts/1?_embed=comments

const retrievePost = id => async dispatch => {
  try {
    const res = await axios.get(`/posts/${id}`);
    dispatch(retrievePostSuccess(res.data));
  } catch (error) {
    dispatch(retrievePostError(error.message));
  }
};

export { fetchPosts, addPost, deletePost, updatePost, retrievePost };
