const PHOTOS_QUANTITY = 25;
const LIKES_QUANTITY_MIN = 15;
const LIKES_QUANTITY_MAX = 200;
const COMMENTS_PER_PHOTO_QUANTITY_MIN = 0;
const COMMENTS_PER_PHOTO_QUANTITY_MAX = 30;
const MESSAGES_PER_COMMENT_QUANTITY_MIN = 1;
const MESSAGES_PER_COMMENT_QUANTITY_MAX = 2;
const AVATAR_ID_MIN = 1;
const AVATAR_ID_MAX = 6;

const PHOTOS_DESCRIPTIONS = [
  'Отель с высоты кексакоптера',
  'Цель близка',
  'На краю земли',
  'Море, солнце, песок и прекрасная незнакомка с фотоаппаратом',
  'Весёлые рисовые человечки принимают ванну',
  'Изящный чёрный McLaren 6505',
  'Натюрморт, минимализм, клубничка',
  'Клюквенный лимонад',
  'Самолёт над пляжем',
  'Нечего обуть',
  'Тропинка к пляжу',
  'Белая Ауди',
  'Салат с морковью и огурцами',
  'Друг на фотосессии',
  'Ноги всегда должны быть в тепле',
  'Выше облаков',
  'Я умею петь в хору, все орут, и я ору',
  'Красный Шевроле Импала в гараже моего дяди',
  'Прогрессивные тапочки',
  'Вечерняя пальмовая аллея',
  'Животный белок с зеленью и долькой лайма',
  'Провожаем закат на пляже',
  'Что за лобстер этот краб',
  'На концерте',
  'Повстречали знакомую племянника дяди брата моего друга',
];

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

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (array) => array[getRandomInRange(0, array.length - 1)];

const createRandomIdGenerator = (max) => {
  const ids = [];

  return () => {
    if (ids.length > max) {
      throw new Error('Перебраны все id из диапазона.');
    }

    let id = getRandomInRange(1, max);

    while(ids.includes(id)) {
      id = getRandomInRange(1, max);
    }

    ids.push(id);
    return id;
  };
};

const createIdGenerator = () => {
  let currentId = 0;
  return () => ++currentId;
};

const getPhotoId = createRandomIdGenerator(PHOTOS_QUANTITY);
const getCommentId = createIdGenerator();

const createRandomMessage = (length) => {
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

const getCommentMessage = () => {
  const messagesLength = getRandomInRange(MESSAGES_PER_COMMENT_QUANTITY_MIN, MESSAGES_PER_COMMENT_QUANTITY_MAX);
  return createRandomMessage(messagesLength);
};

const createUserComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInRange(AVATAR_ID_MIN, AVATAR_ID_MAX)}.svg`,
  message: getCommentMessage(),
  name: getRandomArrayElement(USERNAMES),
});

const getCommentsList = () => Array.from({length: getRandomInRange(COMMENTS_PER_PHOTO_QUANTITY_MIN, COMMENTS_PER_PHOTO_QUANTITY_MAX)}, createUserComment);

const createPhoto = () => {
  const id = getPhotoId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: PHOTOS_DESCRIPTIONS[id - 1],
    likes: getRandomInRange(LIKES_QUANTITY_MIN, LIKES_QUANTITY_MAX),
    comments: getCommentsList(),
  };
};

const createPhotos = () => Array.from({length: PHOTOS_QUANTITY}, createPhoto);

/* eslint-disable no-alert, no-console */
console.log(createPhotos());
/* eslint-enable no-alert */
