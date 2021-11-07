import axios from 'axios';
import {
  addPostRequest,
  addPostSuccess,
  addPostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError
} from './posts-actions';

axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com/';

// GET @ /posts
const fetchPosts = () => async dispatch => {
  dispatch(fetchPostsRequest());

  try {
    const { data } = await axios.get('/posts');
    console.log(data);
    dispatch(fetchPostsSuccess(data));
  } catch (error) {
    dispatch(fetchPostsError(error.message));
  }
};

// POST @ /posts
const addPost = title => async dispatch => {
  dispatch(addPostRequest());
  const post = {
    title,

    completed: false
  };
  console.log(post);

  dispatch(addPostRequest());

  axios
    .post('/posts', post)
    .then(({ data }) => dispatch(addPostSuccess(data)))
    .catch(error => dispatch(addPostError(error.message)));
};

// DELETE @ /posts/:id
const deletePost = postId => dispatch => {
  dispatch(deletePostRequest());

  axios
    .delete(`/posts/${postId}`)
    .then(() => dispatch(deletePostSuccess(postId)))
    .catch(error => dispatch(deletePostError(error.message)));
};

// PATCH @ /posts/:id
const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/posts/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch(error => dispatch(toggleCompletedError(error.message)));
  };

export { fetchPosts, addPost, deletePost, toggleCompleted };
