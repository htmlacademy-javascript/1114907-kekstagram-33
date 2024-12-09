import { updateListCommentsFabric, updateShownCommentsCounterFabric } from '../comment';
import { toggleVisibilityCommentsLoader } from './toggle-visibility.js';

export const initCommentsLoader = (target, comments, step, cb) => {
  const calculateShownComments = updateShownCommentsCounterFabric(0, comments.length, step);
  const loadCommentsHandler = updateListCommentsFabric(comments, calculateShownComments, step);
  cb(loadCommentsHandler);
  const currentShownComments = calculateShownComments();
  toggleVisibilityCommentsLoader(currentShownComments, comments.length);

  target.addEventListener('click', loadCommentsHandler);
  return currentShownComments;
};
