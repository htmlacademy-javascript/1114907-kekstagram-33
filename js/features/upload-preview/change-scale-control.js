import { App } from '../../app';
import { updateImageScale } from './update-preview-scale';

const {
  zoomInButtonElement,
  zoomOutButtonElement,
  scaleValueElement,
} = App.elements;

const ScaleParams = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  START: 100,
};

export const getScaleValue = () => scaleValueElement.value;
export const setScaleValue = (value) =>(scaleValueElement.value = `${value}%`);

export const setDefaultPreviwScale = () => {
  setScaleValue(ScaleParams.START);
  updateImageScale(ScaleParams.START);
};

export const increaseImageScaleHandler = () => {
  let scaleValue = parseFloat(getScaleValue());
  scaleValue += ScaleParams.STEP;
  if (scaleValue > ScaleParams.MAX) {
    scaleValue = 100;
  }
  setScaleValue(scaleValue);
  updateImageScale(scaleValue);
};

export const decreaseImageScaleHandler = () => {
  let scaleValue = parseFloat(getScaleValue());
  scaleValue -= ScaleParams.STEP;
  if (scaleValue < ScaleParams.MIN) {
    scaleValue = ScaleParams.MIN;
  }
  setScaleValue(scaleValue);
  updateImageScale(scaleValue);
};

export const initPreviewScale = () => {
  setDefaultPreviwScale();

  zoomInButtonElement.addEventListener('click', increaseImageScaleHandler);
  zoomOutButtonElement.addEventListener('click', decreaseImageScaleHandler);
};

export const destroyPreviewScale = () => {
  setDefaultPreviwScale();

  zoomInButtonElement.removeEventListener('click', increaseImageScaleHandler);
  zoomOutButtonElement.removeEventListener('click', decreaseImageScaleHandler);
};
