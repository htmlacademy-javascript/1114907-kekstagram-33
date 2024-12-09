import { App } from '../../app';
import { isValidated, resetValidation } from '../../features/image-upload-form';
import { isEscKeyDown, createModal } from '../../shared/util';

const {
  imageUploadFormElement,
  imageUploadOverlayElement,
  formCloseButtonElement,
  imageUploadFieldElement,
  textHashtagsFieldElement,
  textDescriptionFieldElement,
} = App.elements;

const isFieldFocused = () => document.activeElement === textHashtagsFieldElement || document.activeElement === textDescriptionFieldElement;

const clearUploadField = () => {
  imageUploadFieldElement.value = '';
  resetValidation();
  imageUploadFormElement.reset();
};

const formModal = createModal(
  imageUploadOverlayElement,
  formCloseButtonElement,
  {
    beforeCloseCallback: clearUploadField
  }
);

export const initImageUploadForm = () => {
  document.addEventListener('keydown', (e) => {
    if (isEscKeyDown(e) && isFieldFocused()) {
      e.stopPropagation();
    }
  });

  imageUploadFieldElement.addEventListener('change', () => {
    formModal.open();
  });

  imageUploadFormElement.addEventListener('submit', (e) => {
    if (!isValidated()) {
      e.preventDefault();
    }
  });
};
