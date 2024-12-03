import { toOuterHTML } from '../util';

const picturesContainer = document.querySelector('.pictures');

const renderThumbnails = (thumbnailElems) => picturesContainer.insertAdjacentHTML('beforeend', toOuterHTML(thumbnailElems));

export {renderThumbnails};
