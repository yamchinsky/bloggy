import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deletePost, fetchPosts } from '../../redux/posts/posts-operations';
import Post from '../Post/Post';
import { PostListItemStyled } from './PostListStyled';

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const allPosts = useSelector(state => state.posts.items);

  return (
    <PostListItemStyled>
      {allPosts.map(({ id, title, body }) => (
        <li key={id} className={'PostList__item'}>
          <Post
            title={title}
            body={body}
            onDelete={() => dispatch(deletePost(id))}
          />
        </li>
      ))}
    </PostListItemStyled>
  );
};
export default PostsList;
