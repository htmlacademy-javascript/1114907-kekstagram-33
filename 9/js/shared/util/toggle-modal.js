import { toggleClass } from './toggle-class.js';

export const toggleModal = (target, eventFns, data = {}, renderFn = () => {}, cb = () => {}) => {
  if (Object.keys(data).length !== 0) {
    renderFn(data);
  }

  toggleClass(target, 'hidden');
  toggleClass(document.body, 'modal-open');

  eventFns();
  cb();
};
