import { toOuterHTML } from '../../shared/util/index.js';
import { getThumbnails } from './get-thumbnails.js';

const renderListThumbnails = (thumbnailsContainer, thumbnailData) => thumbnailsContainer.insertAdjacentHTML('beforeend', toOuterHTML(getThumbnails(thumbnailData)));

export { renderListThumbnails };
