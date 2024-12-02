import { getMockData } from './data.js';
import { getThumbnails, renderThumbnails } from './thumbnails.js';

const thumbnailHTMLCollection = getThumbnails(getMockData());

renderThumbnails(thumbnailHTMLCollection);
