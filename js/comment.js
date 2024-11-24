const createComment = (actions) => {
  const {getId, getAvatar, getMessage, getName} = actions;

  const id = getId();
  const avatar = getAvatar();
  const message = getMessage();
  const name = getName();

  return {id, avatar, message, name};
};

export {createComment};
