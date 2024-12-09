import { createIdGenerator, createRandomIdGenerator, getRandomInRange } from '../../shared/util';
import { LikesParams, PhotoParams } from '../constants';
import { createPhotoData } from '../data';

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

export { getPhotosData };
