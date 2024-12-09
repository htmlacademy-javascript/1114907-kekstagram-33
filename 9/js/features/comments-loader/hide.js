import { App } from '../../app';

const { commentsLoaderElement } = App.elements;

export const hideCommentsLoader = () => {
  commentsLoaderElement.classList.add('hidden');
};
