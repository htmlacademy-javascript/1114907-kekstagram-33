import { App } from '../../app';
import { renderListComments } from '../../entities/comment';
import { toggleVisibilityCommentsLoader } from '../comments-loader';

const { commentShownCountElement, commentsElement } = App.elements;

export const updateListCommentsFabric = (comments, calculateShownComments, minShownCommentsNumber) => (() => {
  const commentShownCount = calculateShownComments();

  toggleVisibilityCommentsLoader(commentShownCount, comments.length, minShownCommentsNumber);

  commentShownCountElement.textContent = commentShownCount;
  commentsElement.innerHTML = renderListComments(comments, commentShownCount);
});
