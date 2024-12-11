import { getRandomInRange } from './get-random-in-range.js';

export const createRandomIdGenerator = (max) => {
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
