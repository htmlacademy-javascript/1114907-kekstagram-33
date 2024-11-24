import { getRandomArrayElement, getRandomInRange } from './util';
import { createComment } from './comment';

const COMMENTS_PER_PHOTO_QUANTITY_MIN = 0;
const COMMENTS_PER_PHOTO_QUANTITY_MAX = 30;
const MESSAGES_PER_COMMENT_QUANTITY_MIN = 1;
const MESSAGES_PER_COMMENT_QUANTITY_MAX = 2;
const AVATAR_ID_MIN = 1;
const AVATAR_ID_MAX = 6;

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const USERNAMES = [
  'Марио',
  'Давид',
  'Бруно',
  'Дидье',
  'Карим',
  'Брюс',
  'Томас',
  'Беллатриса',
  'Антонина',
  'Дженнифер',
  'Адель',
  'Акулина',
  'Ангелина',
  'Анита',
  'Аэлита',
  'Богемия',
  'Божена',
  'Василиса',
  'Венера',
  'Веселина',
  'Энтони',
  'Бенджамин',
  'Беннетт',
  'Брейден',
  'Кэмерон',
  'Христианин',
  'Кристофер',
  'Доминик',
  'Эверетт',
  'Иезекииль',
  'Габриэль',
];

const getRandomMessage = (length) => {
  const uniqueMessage = [];
  return (() => {
    let newMessage = getRandomArrayElement(COMMENT_MESSAGES);
    while (uniqueMessage.length < length) {
      if (uniqueMessage.includes(newMessage)) {
        newMessage = getRandomArrayElement(COMMENT_MESSAGES);
      } else {
        uniqueMessage.push(newMessage);
      }
    }
    return uniqueMessage.join(' ');
  })();
};

const createMessageSequence = () => {
  const messagesLength = getRandomInRange(MESSAGES_PER_COMMENT_QUANTITY_MIN, MESSAGES_PER_COMMENT_QUANTITY_MAX);
  return getRandomMessage(messagesLength);
};

const createComments = (generatorIdFn) => {
  const getId = () => generatorIdFn();
  const getAvatar = () => `img/avatar-${getRandomInRange(AVATAR_ID_MIN, AVATAR_ID_MAX)}.svg`;
  const getMessage = () => createMessageSequence();
  const getName = () => getRandomArrayElement(USERNAMES);

  const length = getRandomInRange(COMMENTS_PER_PHOTO_QUANTITY_MIN, COMMENTS_PER_PHOTO_QUANTITY_MAX);
  const actions = {getId, getAvatar, getMessage, getName};

  return Array.from({length}, () => createComment(actions));
};

export {createComments};
