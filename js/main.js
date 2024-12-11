import { App } from './app';
import { getData } from './app/api';
import { renderListThumbnails } from './entities/thumbnail';
import { findPostData } from './features/post-details';
import { postDetails } from './widgets/post-details';
import { initUploadForm } from './widgets/upload-form';

const { picturesContainerElement } = App.elements;

const data = getData();

const thumbnailsClickHandler = (e) => {
  if (!e.target.closest('.picture')) {
    return;
  }

  const currentPost = e.target.closest('.picture');
  const currentId = currentPost.dataset.id;
  const currentPostData = findPostData(data, currentId);

  postDetails(currentPostData).open();
};

picturesContainerElement.addEventListener('click', thumbnailsClickHandler);

renderListThumbnails(picturesContainerElement, data);
initUploadForm();
