import { isEscKeyDown } from './is-esc-keydown.js';
import { toggleModal } from './toggle-modal.js';

export const createModal = (modalElement, cancelButtonElement, options) => {
  const { data = {}, renderFn = () => {}, beforeCloseCallback = () => {} } = options;
  const openModal = () => toggleModal(modalElement, attachModalEventListeners, data, renderFn);
  const closeModal = () => toggleModal(modalElement, detachModalEventListeners, {}, () => {});

  const cancelButtonHandler = () => closeModal();
  const escKeyDownHandler = (e) => isEscKeyDown(e) ? closeModal() : null;

  function attachModalEventListeners() {
    cancelButtonElement.addEventListener('click', cancelButtonHandler);
    window.addEventListener('keydown', escKeyDownHandler);
  }

  function detachModalEventListeners() {
    cancelButtonElement.removeEventListener('click', cancelButtonHandler);
    window.removeEventListener('keydown', escKeyDownHandler);
    beforeCloseCallback();
  }

  return { open: openModal };
};
