const createComment = ({avatarUrl, userName, message}) => (`
  <li class="social__comment">
    <img
      class="social__picture"
      src="${avatarUrl}"
      alt="${userName}"
      width="35" height="35">
    <p class="social__text">${message}</p>
  </li>
`);

export { createComment };
