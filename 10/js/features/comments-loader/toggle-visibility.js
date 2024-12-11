import { hideCommentsLoader } from './hide.js';
import { showCommentsLoader } from './show.js';

export const toggleVisibilityCommentsLoader = (currentShownComments, commentsTotalNumber, minCommentsNumber) => {
  if (currentShownComments >= commentsTotalNumber || commentsTotalNumber <= minCommentsNumber) {
    hideCommentsLoader();
  } else {
    showCommentsLoader();
  }
};
