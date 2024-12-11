import { App } from '../../app';

const { previewElement } = App.elements;

export const updateImageScale = (scale) => {
  previewElement.style.scale = `${scale}%`;
};
