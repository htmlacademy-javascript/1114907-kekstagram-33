import { getMockData } from './api';
import { getThumbnails, renderThumbnails } from './thumbnails';

const thumbnailHTMLCollection = getThumbnails(getMockData());

renderThumbnails(thumbnailHTMLCollection);
