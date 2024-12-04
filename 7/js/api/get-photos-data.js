import { createIdGenerator, createRandomIdGenerator, getRandomInRange } from '../util';
import { createPhotoData } from './create-photo-data.js';

const PhotoParams = {
  QUANTITY: 25,
  DESCRIPTIONS: [
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
  ],
};

const LikesParams = {
  QUANTITY_MIN: 15,
  QUANTITY_MAX: 200,
};

const getPhotosData = (commentsCb) => {
  const getId = createRandomIdGenerator(PhotoParams.QUANTITY);
  const getUrl = (id) => `photos/${id}.jpg`;
  const getDescription = (id) => PhotoParams.DESCRIPTIONS[id - 1];
  const getLikes = () => getRandomInRange(LikesParams.QUANTITY_MIN, LikesParams.QUANTITY_MAX);
  const getCommentId = createIdGenerator();
  const getComments = () => commentsCb(getCommentId);

  const length = PhotoParams.QUANTITY;
  const actions = {getId, getUrl, getDescription, getLikes, getComments};

  return Array.from({length}, () => createPhotoData(actions));
};

export {getPhotosData};
