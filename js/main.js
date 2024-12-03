import { getMockData } from './api';
import { getThumbnails, renderThumbnails } from './thumbnails';

const picturesContainer = document.querySelector('.pictures');
const thumbnailHTMLCollection = getThumbnails(getMockData());

renderThumbnails(picturesContainer, thumbnailHTMLCollection);
