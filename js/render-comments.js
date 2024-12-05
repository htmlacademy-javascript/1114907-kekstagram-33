const renderComments = (comments, commentsLength, cb) => comments.slice(0, commentsLength).reduce((html, comment) => (html += cb(comment)), '');

export { renderComments };
