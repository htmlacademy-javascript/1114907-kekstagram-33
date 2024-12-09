import { CommentsParams } from '../constants';
import { getRandomArrayElement, getRandomInRange } from '../../shared/util';
import { createCommentData } from '../data';

const getRandomSentence = (length) => {
  const uniqueSentence = [];
  return (() => {
    let newSentence = getRandomArrayElement(CommentsParams.SENTENCES);
    while (uniqueSentence.length < length) {
      if (uniqueSentence.includes(newSentence)) {
        newSentence = getRandomArrayElement(CommentsParams.SENTENCES);
      } else {
        uniqueSentence.push(newSentence);
      }
    }
    return uniqueSentence.join(' ');
  })();
};

const createSentencesSequence = () => {
  const messagesLength = getRandomInRange(CommentsParams.SENTENCES_PER_MESSAGE_QUANTITY_MIN, CommentsParams.SENTENCES_PER_MESSAGE_QUANTITY_MAX);
  return getRandomSentence(messagesLength);
};

const getCommentsData = (generatorIdFn) => {
  const getId = () => generatorIdFn();
  const getAvatar = () => `img/avatar-${getRandomInRange(CommentsParams.AVATAR_ID_MIN, CommentsParams.AVATAR_ID_MAX)}.svg`;
  const getMessage = () => createSentencesSequence();
  const getName = () => getRandomArrayElement(CommentsParams.USERNAMES);

  const length = getRandomInRange(CommentsParams.COMMENTS_PER_PHOTO_QUANTITY_MIN, CommentsParams.COMMENTS_PER_PHOTO_QUANTITY_MAX);
  const actions = {getId, getAvatar, getMessage, getName};

  return Array.from({length}, () => createCommentData(actions));
};

export { getCommentsData };
