import { toOuterHTML } from '../util';

const renderThumbnails = (thumbnailsContainer, thumbnailElems) => thumbnailsContainer.insertAdjacentHTML('beforeend', toOuterHTML(thumbnailElems));

export {renderThumbnails};
