const createThumbnail = (thumbnailTemplate, {id, url, description, likes, comments}) => {
  const template = thumbnailTemplate.content.querySelector('.picture');
  const thumbnailLinkEl = template.cloneNode(true);

  const imageEl = thumbnailLinkEl.querySelector('.picture__img');
  const commentsEl = thumbnailLinkEl.querySelector('.picture__comments');
  const likesEl = thumbnailLinkEl.querySelector('.picture__likes');

  thumbnailLinkEl.dataset.id = id;
  imageEl.src = url;
  imageEl.alt = description;
  likesEl.textContent = likes;
  commentsEl.textContent = comments.length;

  return thumbnailLinkEl;
};

export {createThumbnail};
