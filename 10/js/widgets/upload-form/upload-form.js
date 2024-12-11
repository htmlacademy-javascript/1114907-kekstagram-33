import { App } from '../../app';
import { isValidated, resetValidation } from '../../features/upload-form';
import { initPreviewScale, destroyPreviewScale, initEffectSlider, destroyEffectSlider } from '../../features/upload-preview';
import { isEscKeyDown, createModal } from '../../shared/util';

const {
  uploadFormElement,
  uploadOverlayElement,
  formCloseButtonElement,
  uploadFieldElement,
  textHashtagsFieldElement,
  textDescriptionFieldElement,
} = App.elements;

const isFieldFocused = () => document.activeElement === textHashtagsFieldElement || document.activeElement === textDescriptionFieldElement;

const clearUploadField = () => {
  destroyPreviewScale();
  destroyEffectSlider();
  uploadFieldElement.value = '';
  resetValidation();
  uploadFormElement.reset();
};

const formModal = createModal(
  uploadOverlayElement,
  formCloseButtonElement,
  {
    beforeCloseCallback: clearUploadField
  }
);

export const initUploadForm = () => {
  document.addEventListener('keydown', (e) => {
    if (isEscKeyDown(e) && isFieldFocused()) {
      e.stopPropagation();
    }
  });

  uploadFieldElement.addEventListener('change', () => {
    formModal.open();
    initPreviewScale();
    initEffectSlider();
  });

  uploadFormElement.addEventListener('submit', (e) => {
    if (!isValidated()) {
      e.preventDefault();
    }
  });
};
