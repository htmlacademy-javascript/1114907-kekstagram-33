import { renderComment } from './render-comment.js';
import { renderComments } from './render-comments.js';
import { isEscKeyDown } from './util/index.js';

const SHOWN_COMMENTS_STEP = 5;

const postModal = document.querySelector('.big-picture');
const postModalCloseButton = document.querySelector('.big-picture__cancel');
const commentsLoader = document.querySelector('.comments-loader');

const showCommentsLoader = () => {
  commentsLoader.classList.remove('hidden');
};

const hideCommentsLoader = () => {
  commentsLoader.classList.add('hidden');
};

const checkVisibleCommentsLoader = (commentShownCount, commentsTotalNumber) => {
  if (commentShownCount >= commentsTotalNumber || commentsTotalNumber <= SHOWN_COMMENTS_STEP) {
    hideCommentsLoader();
  } else {
    showCommentsLoader();
  }
};

const findPostData = (data, currentId) => data.find((item) => Number(item.id) === Number(currentId));

const loadComments = (comments, calculateShownComments) => (() => {
  const commentShownCount = calculateShownComments();

  checkVisibleCommentsLoader(commentShownCount, comments.length);

  postModal.querySelector('.social__comment-shown-count').textContent = commentShownCount;
  postModal.querySelector('.social__comments').innerHTML = renderComments(comments, commentShownCount, renderComment);
});

const updateShownCommentsCounter = (commentShownCount, commentsTotalNumber) => (() => {
  commentShownCount += SHOWN_COMMENTS_STEP;
  return Math.min(commentShownCount, commentsTotalNumber);
});

const renderPost = (post) => {
  const calculateShownComments = updateShownCommentsCounter(0, post.comments.length);
  const loadCommentsHandler = loadComments(post.comments, calculateShownComments);
  window.cb = loadCommentsHandler;
  const currentShowComments = calculateShownComments();

  postModal.querySelector('.big-picture__img img').src = post.url;
  postModal.querySelector('.big-picture__img img').alt = post.description;
  postModal.querySelector('.likes-count').textContent = post.likes;
  postModal.querySelector('.social__caption').textContent = post.description;
  postModal.querySelector('.social__comment-shown-count').textContent = currentShowComments;
  postModal.querySelector('.social__comment-total-count').textContent = post.comments.length;
  postModal.querySelector('.social__comments').innerHTML = renderComments(post.comments, currentShowComments, renderComment);

  checkVisibleCommentsLoader(currentShowComments, post.comments.length);
  commentsLoader.addEventListener('click', loadCommentsHandler);
};

const closePostModal = () => {
  postModal.classList.add('hidden');
  document.body.classList.remove('modal-open');

  showCommentsLoader();

  detachEventListeners();
  window.cb = null;
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
  commentsLoader.removeEventListener('click', window.cb);
}

const openPostModal = (picture) => {
  renderPost(picture);

  postModal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  attachEventListeners();

};

export {findPostData, renderPost, openPostModal, closePostModal};
