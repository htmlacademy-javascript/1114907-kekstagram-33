import { getMockData } from './api/index.js';
import { findPostData, openPostModal } from './modal.js';
import { getThumbnails, renderThumbnails } from './thumbnails/index.js';

const picturesContainer = document.querySelector('.pictures');
const data = getMockData();

const thumbnailHTMLCollection = getThumbnails(data);

const thumbnailsClickHandler = (e) => {
  if (!e.target.closest('.picture')) {
    return;
  }

  const currentPost = e.target.closest('.picture');
  const currentId = currentPost.dataset.id;
  const currentPostData = findPostData(data, currentId);

  openPostModal(currentPostData);
};

picturesContainer.addEventListener('click', thumbnailsClickHandler);

renderThumbnails(picturesContainer, thumbnailHTMLCollection);
