import { createComment } from './create-comment.js';

const renderListComments = (commentsData, commentsLength) => commentsData.slice(0, commentsLength).reduce((html, commentData) => (html += createComment(commentData)), '');

export { renderListComments };
