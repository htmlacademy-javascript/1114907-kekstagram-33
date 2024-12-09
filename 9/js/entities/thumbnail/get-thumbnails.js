import { createThumbnail } from './create-thumbnail.js';

const thumbnailTemplate = document.querySelector('#picture');

const getThumbnails = (thumbnailsData) => thumbnailsData.map((thumbnailData) => createThumbnail(thumbnailTemplate, thumbnailData));

export {getThumbnails};
