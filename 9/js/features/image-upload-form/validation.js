import { App } from '../../app';
import { normalizeSpaces } from '../../shared/util/normalize-spaces';

const HASHTAG_REGEX = /^#[A-Za-zА-ЯЁа-яё0-9]{1,19}$/i;
const HASHTAG_COUNTER = 5;

const {
  imageUploadFormElement,
  textHashtagsFieldElement,
} = App.elements;

const pristine = new Pristine(imageUploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const getHashtags = (string) => normalizeSpaces(string).split(' ').map((item) => item.toLowerCase());
const isValidatedHashtag = (string) => HASHTAG_REGEX.test(string);
const isHashtagCorrect = (string) => !string.length || getHashtags(string).every((hashtag) => isValidatedHashtag(hashtag));
const isLessThanOrQqualHashtagCounter = (string) => !string.length || getHashtags(string).length <= HASHTAG_COUNTER;
const isHashtagUnique = (string) => !string.length || getHashtags(string).length === [...new Set(getHashtags(string))].length;

pristine.addValidator(
  textHashtagsFieldElement,
  isHashtagCorrect,
  'Неправильный хэштег'
);

pristine.addValidator(
  textHashtagsFieldElement,
  isLessThanOrQqualHashtagCounter,
  `Нельзя указать больше ${HASHTAG_COUNTER} хэштегов`
);

pristine.addValidator(
  textHashtagsFieldElement,
  isHashtagUnique,
  'Один и тот же хэштег не может быть использован дважды'
);

export const isValidated = () => pristine.validate();
export const resetValidation = () => pristine.reset();
