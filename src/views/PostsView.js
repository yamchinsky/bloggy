import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '../Components/IconButton';
import PostsList from '../Components/PostList/PostList';
import { fetchPosts } from '../redux/posts/posts-operations';
import { ReactComponent as AddIcon } from '../Assets/icons/add.svg';
import Modal from '../Components/Modal';
import PostEditor from '../Components/PostEditor/PostEditor';
import Container from '../Components/Container';

const PostsView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  // window.onload = function () {
  //   const allPostsBtnNode = document.querySelector('.allposts');

  //   allPostsBtnNode.addEventListener('click', onAllPostsClick);
  // };

  // function onAllPostsClick(e) {
  //   if (e.target.className === 'allposts') {
  //     alert(1);
  //     getAllPosts(allPosts);
  //     return;
  //   }
  //   return alert(12);
  // }

  // function getAllPosts(allPosts) {
  //   console.log(allPosts);
  //   return allPosts;
  // }
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <Container>
      <IconButton onClick={toggleModal} aria-label='Добавить post'>
        <AddIcon width='40' height='40' fill='white' />
      </IconButton>
      <PostsList />

      {showModal && (
        <Modal onClose={toggleModal}>
          <PostEditor onSave={toggleModal} />
        </Modal>
      )}
      <button className='allposts'>See all posts</button>
    </Container>
  );
};

export default PostsView;
