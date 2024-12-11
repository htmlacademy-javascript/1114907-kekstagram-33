import { App } from '../../app';
import { renderListComments } from '../../entities/comment';
import { initCommentsLoader } from '../../features/comments-loader';
import { createModal } from '../../shared/util';

const SHOWN_COMMENTS_STEP = 5;

const {
  postDetailsElement,
  postDetailsCloseButtonElement,
  postDetailsImageElement,
  likesCountElement,
  captionElement,
  commentShownCountElement,
  commentTotalCountElement,
  commentsElement,
  commentsLoaderElement
} = App.elements;

const saveLoadHandlerToGlogal = (handler) => {
  window.cb = handler;
};

const removeLoadHandlerInGlobal = () => {
  commentsLoaderElement.removeEventListener('click', window.cb);
  window.cb = null;
};

const renderPost = ({url, description, likes, comments}) => {
  const currentShownComments = initCommentsLoader(commentsLoaderElement, comments, SHOWN_COMMENTS_STEP, saveLoadHandlerToGlogal);

  postDetailsImageElement.src = url;
  postDetailsImageElement.alt = description;
  likesCountElement.textContent = likes;
  captionElement.textContent = description;
  commentShownCountElement.textContent = currentShownComments;
  commentTotalCountElement.textContent = comments.length;
  commentsElement.innerHTML = '';
  commentsElement.insertAdjacentHTML('beforeend', renderListComments(comments, currentShownComments));
};

const postDetails = (pictureData) => createModal(
  postDetailsElement,
  postDetailsCloseButtonElement,
  {
    data: pictureData,
    renderFn: renderPost,
    beforeCloseCallback: removeLoadHandlerInGlobal,
  },
);

export { postDetails };
