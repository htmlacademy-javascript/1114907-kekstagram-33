import { renderComment } from './render-comment';
import { isEscKeyDown } from './util';

const postModal = document.querySelector('.big-picture');
const postModalCloseButton = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

commentCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

const findPostData = (data, currentId) => data.find((item) => Number(item.id) === Number(currentId));

const renderPost = (post) => {
  const commentShownCount = Math.min(5, post.comments.length);

  postModal.querySelector('.big-picture__img img').src = post.url;
  postModal.querySelector('.big-picture__img img').alt = post.description;
  postModal.querySelector('.likes-count').textContent = post.likes;
  postModal.querySelector('.social__caption').textContent = post.description;
  postModal.querySelector('.social__comment-shown-count').textContent = commentShownCount;
  postModal.querySelector('.social__comment-total-count').textContent = post.comments.length;
  postModal.querySelector('.social__comments').innerHTML = post.comments.slice(0, commentShownCount).reduce((html, comment) => (html += renderComment(comment)), '');
};

const closePostModal = () => {
  postModal.classList.add('hidden');
  document.body.classList.remove('modal-open');

  detachEventListeners();
};

const closeButtonClickHandler = () => closePostModal();

const escKeyDownHandler = (e) => isEscKeyDown(e) ? closePostModal() : null;

function attachEventListeners() {
  postModalCloseButton.addEventListener('click', closeButtonClickHandler);
  document.addEventListener('keydown', escKeyDownHandler);
}

function detachEventListeners() {
  postModalCloseButton.removeEventListener('click', closeButtonClickHandler);
  document.removeEventListener('keydown', escKeyDownHandler);
}

const openPostModal = (picture) => {
  renderPost(picture);

  postModal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  attachEventListeners();

};

export {findPostData, renderPost, openPostModal, closePostModal};
