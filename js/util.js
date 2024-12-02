const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (array) => array[getRandomInRange(0, array.length - 1)];

const toOuterHTML = (items) => items.reduce((html, item) => (html += item.outerHTML), '');

export {getRandomInRange, getRandomArrayElement, toOuterHTML};
