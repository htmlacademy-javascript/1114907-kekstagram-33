import { getRandomInRange } from './get-random-in-range.js';

export const getRandomArrayElement = (array) => array[getRandomInRange(0, array.length - 1)];
