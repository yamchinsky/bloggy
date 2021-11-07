import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/posts/posts-operations';

import { PostEditorStyled } from './PostEditorStyled';

export default function PostEditor({ onSave }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleChange = useCallback(e => {
    setMessage(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (message === '') {
        return alert('Заполни текст поста.');
      }

      dispatch(addPost(message));
      onSave();
      setMessage('');
    },
    [dispatch, message, onSave]
  );

  return (
    <PostEditorStyled onSubmit={handleSubmit}>
      <textarea
        className='postEditor__textarea'
        value={message}
        onChange={handleChange}
      ></textarea>
      <button type='submit' className='postEditor__button'>
        Сохранить
      </button>
    </PostEditorStyled>
  );
}
