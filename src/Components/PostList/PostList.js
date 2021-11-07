import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deletePost, fetchPosts } from '../../redux/posts/posts-operations';
import Post from '../Post/Post';
import { PostListItemStyled } from './PostListStyled';

const PostsList = ({ onDeletePost }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(deletePost());
  }, [dispatch]);

  const allPosts = useSelector(state => state.posts.items);
  console.log(allPosts);

  return (
    <PostListItemStyled>
      {allPosts.map(({ id, title, body }) => (
        <li key={id} className='Post__item'>
          <Post title={title} body={body}></Post>
          {/* <Post text={title} body={body} onDelete={() => onDeletePost(id)} /> */}
        </li>
      ))}
    </PostListItemStyled>
  );
};
export default PostsList;
