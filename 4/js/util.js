const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (array) => array[getRandomInRange(0, array.length - 1)];

export {getRandomInRange, getRandomArrayElement};
