import { LikesParams, PhotoParams, CommentsParams, EffectsParams } from './constants';

export const App = {
  elements: {
    picturesContainerElement: document.querySelector('.pictures'),
    postDetailsElement: document.querySelector('.big-picture'),
    postDetailsCloseButtonElement: document.querySelector('.big-picture__cancel'),
    postDetailsImageElement: document.querySelector('.big-picture__img img'),
    likesCountElement: document.querySelector('.likes-count'),
    captionElement: document.querySelector('.social__caption'),
    commentShownCountElement: document.querySelector('.social__comment-shown-count'),
    commentTotalCountElement: document.querySelector('.social__comment-total-count'),
    commentsElement: document.querySelector('.social__comments'),
    commentsLoaderElement: document.querySelector('.comments-loader'),
    uploadFormElement: document.querySelector('.img-upload__form'),
    uploadOverlayElement: document.querySelector('.img-upload__overlay'),
    formCloseButtonElement: document.querySelector('.img-upload__cancel'),
    uploadFieldElement: document.querySelector('.img-upload__input'),
    textHashtagsFieldElement: document.querySelector('.img-upload__text .text__hashtags'),
    textDescriptionFieldElement: document.querySelector('.img-upload__text .text__description'),
    previewElement: document.querySelector('.img-upload__preview img'),
    zoomInButtonElement: document.querySelector('.scale__control--bigger'),
    zoomOutButtonElement: document.querySelector('.scale__control--smaller'),
    scaleValueElement: document.querySelector('.scale__control--value'),
    effectLevelSliderWrapperElement: document.querySelector('.effect-level'),
    effectLevelSliderElement: document.querySelector('.effect-level__slider'),
    effectLevelValueElement: document.querySelector('.effect-level__value'),
    effectRadioControlElements: document.querySelectorAll('.effects__radio'),
  },
  LikesParams,
  PhotoParams,
  CommentsParams,
  EffectsParams,
};