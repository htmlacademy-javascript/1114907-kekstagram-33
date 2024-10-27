const isLessThanOrEqualToMaxLength = (textToValidate, maxLength) => textToValidate.length <= maxLength;

const isPalindrom = (value) => {
  if (typeof value === 'number') {
    value = value.toString();
  }
  const normalized = value.toLowerCase().replaceAll(' ', '');
  return normalized === normalized.split('').reverse().join('');
};

const getNumbersFromString = (value) => {
  if (typeof value === 'number') {
    value = value.toString();
  }
  const number = [...value].filter((symbol) => !Number.isNaN(parseInt(symbol, 10))).join('');
  if (!number.length) {
    return NaN;
  }
  return +number;
};

console.log(isLessThanOrEqualToMaxLength('проверяемая строка', 20));
console.log(isLessThanOrEqualToMaxLength('проверяемая строка', 18));
console.log(isLessThanOrEqualToMaxLength('проверяемая строка', 10));

console.log(isPalindrom('топот'));
console.log(isPalindrom('ДовОд'));
console.log(isPalindrom('Кекс'));
console.log(isPalindrom('Лёша на полке клопа нашёл '));
console.log(isPalindrom(777));

console.log(getNumbersFromString('2023 год'));
console.log(getNumbersFromString('ECMAScript 2022'));
console.log(getNumbersFromString('1 кефир, 0.5 батона'));
console.log(getNumbersFromString('агент 007'));
console.log(getNumbersFromString('а я томат'));
console.log(getNumbersFromString(2023));
console.log(getNumbersFromString(-1));
console.log(getNumbersFromString(1.5));
