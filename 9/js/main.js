import { App } from './app';
import { getData } from './app/api';
import { renderListThumbnails } from './entities/thumbnail';
import { findPostData } from './features/post-modal';
import { postModal } from './widgets/post-modal';
import { initImageUploadForm } from './widgets/image-upload-form';

const { picturesContainerElement } = App.elements;

const data = getData();

const thumbnailsClickHandler = (e) => {
  if (!e.target.closest('.picture')) {
    return;
  }

  const currentPost = e.target.closest('.picture');
  const currentId = currentPost.dataset.id;
  const currentPostData = findPostData(data, currentId);

  postModal(currentPostData).open();
};

picturesContainerElement.addEventListener('click', thumbnailsClickHandler);

renderListThumbnails(picturesContainerElement, data);
initImageUploadForm();
