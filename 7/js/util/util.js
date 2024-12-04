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

const toOuterHTML = (items) => items.reduce((html, item) => (html += item.outerHTML), '');

const isEscKeyDown = (e) => e.key === 'Escape';

export {getRandomInRange, getRandomArrayElement, createRandomIdGenerator, createIdGenerator, toOuterHTML, isEscKeyDown};
