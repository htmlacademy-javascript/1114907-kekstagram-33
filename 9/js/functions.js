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

/*
start - начало рабочего дня
end - конец рабочего дня
startMeet - начало встречи
durationMeet - продолжительность встречи в минутах
*/
const isPossibleToScheduleMeet = (start, end, startMeet, durationMeet) => {
  const toMinutes = (time) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  };

  const s = toMinutes(start);
  const e = toMinutes(end);
  const sm = toMinutes(startMeet);
  const em = sm + durationMeet;

  return sm >= s && em <= e;
};

/* eslint-disable no-alert, no-console */
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

console.log(isPossibleToScheduleMeet('08:00', '17:30', '14:00', 90));
console.log(isPossibleToScheduleMeet('8:0', '10:0', '8:0', 120));
console.log(isPossibleToScheduleMeet('08:00', '14:30', '14:00', 90));
console.log(isPossibleToScheduleMeet('14:00', '17:30', '08:0', 90));
console.log(isPossibleToScheduleMeet('8:00', '17:30', '08:00', 900));
/* eslint-enable no-alert */
