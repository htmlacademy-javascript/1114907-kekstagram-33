import { LikesParams, PhotoParams, CommentsParams } from './constants';

export const App = {
  elements: {
    picturesContainerElement: document.querySelector('.pictures'),
    postModalElement: document.querySelector('.big-picture'),
    postModalCloseButtonElement: document.querySelector('.big-picture__cancel'),
    postModalImageElement: document.querySelector('.big-picture__img img'),
    likesCountElement: document.querySelector('.likes-count'),
    captionElement: document.querySelector('.social__caption'),
    commentShownCountElement: document.querySelector('.social__comment-shown-count'),
    commentTotalCountElement: document.querySelector('.social__comment-total-count'),
    commentsElement: document.querySelector('.social__comments'),
    commentsLoaderElement: document.querySelector('.comments-loader'),
    imageUploadFormElement: document.querySelector('.img-upload__form'),
    imageUploadOverlayElement: document.querySelector('.img-upload__overlay'),
    formCloseButtonElement: document.querySelector('.img-upload__cancel'),
    imageUploadFieldElement: document.querySelector('.img-upload__input'),
    textHashtagsFieldElement: document.querySelector('.img-upload__text .text__hashtags'),
    textDescriptionFieldElement: document.querySelector('.img-upload__text .text__description'),
  },
  LikesParams,
  PhotoParams,
  CommentsParams,
};
