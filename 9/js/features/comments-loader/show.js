import { App } from '../../app';

const { commentsLoaderElement } = App.elements;

export const showCommentsLoader = () => {
  commentsLoaderElement.classList.remove('hidden');
};
