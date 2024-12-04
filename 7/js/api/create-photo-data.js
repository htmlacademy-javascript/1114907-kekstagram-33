const createPhotoData = (actions) => {
  const {getId, getUrl, getDescription, getLikes, getComments} = actions;

  const id = getId();
  const url = getUrl(id);
  const description = getDescription(id);
  const likes = getLikes();
  const comments = getComments();

  return {id, url, description, likes, comments};
};

export {createPhotoData};
