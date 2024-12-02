import { toOuterHTML } from './util.js';
import { createThumbnail } from './thumbnail.js';

const thumbnailTemplate = document.querySelector('#picture');
const picturesContainer = document.querySelector('.pictures');

const getThumbnails = (thumbnailsData) => thumbnailsData.map((thumbnailData) => createThumbnail(thumbnailTemplate, thumbnailData));

const renderThumbnails = (thumbnails) => picturesContainer.insertAdjacentHTML('beforeend', toOuterHTML(thumbnails));

export {getThumbnails, renderThumbnails};
