const createCommentData = (actions) => {
  const {getId, getAvatar, getMessage, getName} = actions;

  const id = getId();
  const avatarUrl = getAvatar();
  const message = getMessage();
  const name = getName();

  return {id, avatarUrl, message, name};
};

export {createCommentData};
