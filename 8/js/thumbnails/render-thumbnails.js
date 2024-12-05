import { toOuterHTML } from '../util/index.js';

const renderThumbnails = (thumbnailsContainer, thumbnailElems) => thumbnailsContainer.insertAdjacentHTML('beforeend', toOuterHTML(thumbnailElems));

export {renderThumbnails};
