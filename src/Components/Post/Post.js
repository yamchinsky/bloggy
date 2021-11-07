import { PostItemStyled } from './PostItemStyled';

const Post = ({ title, body, onDelete }) => {
  console.log(title);
  return (
    <PostItemStyled>
      <input type='checkbox' className='PostsList__checkbox' />
      <p className='PostsList__title'>{title}</p>
      <p className='PostsList__text'>{body}</p>
      <button type='button' className='PostsList__btn' onClick={onDelete}>
        Удалить
      </button>
    </PostItemStyled>
  );
};

export default Post;
