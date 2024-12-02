import { getRandomInRange } from './util.js';
import { getCommentsData } from './comments-data.js';
import { createPhoto } from './photo.js';

const PHOTOS_QUANTITY = 25;
const LIKES_QUANTITY_MIN = 15;
const LIKES_QUANTITY_MAX = 200;

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

const getPhotosData = () => {
  const getId = createRandomIdGenerator(PHOTOS_QUANTITY);
  const getUrl = (id) => `photos/${id}.jpg`;
  const getDescription = (id) => PHOTOS_DESCRIPTIONS[id - 1];
  const getLikes = () => getRandomInRange(LIKES_QUANTITY_MIN, LIKES_QUANTITY_MAX);
  const getCommentId = createIdGenerator();
  const getComments = () => getCommentsData(getCommentId);

  const length = PHOTOS_QUANTITY;
  const actions = {getId, getUrl, getDescription, getLikes, getComments};

  return Array.from({length}, () => createPhoto(actions));
};

export {getPhotosData};
