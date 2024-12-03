const createThumbnail = (thumbnailTemplate, thumbnailData) => {
  const {url, description, likes, comments} = thumbnailData;

  const template = thumbnailTemplate.content.cloneNode(true);
  const thumbnailLinkEl = template.querySelector('.picture');

  const imageEl = thumbnailLinkEl.querySelector('.picture__img');
  const commentsEl = thumbnailLinkEl.querySelector('.picture__comments');
  const likesEl = thumbnailLinkEl.querySelector('.picture__likes');

  imageEl.src = url;
  imageEl.alt = description;
  likesEl.textContent = likes;
  commentsEl.textContent = comments.length;

  return thumbnailLinkEl;
};

export {createThumbnail};
