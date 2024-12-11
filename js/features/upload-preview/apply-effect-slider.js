import { App } from '../../app';

const {
  effectLevelSliderWrapperElement,
  effectLevelSliderElement,
  effectLevelValueElement,
  uploadFormElement,
  previewElement,
} = App.elements;

const { EffectsParams } = App;

export const createRangeSlider = (target, { form, preview }) => {
  let currentEffect = 'none';
  let currentEffectOptions = EffectsParams[currentEffect];

  const hide = () => {
    effectLevelSliderWrapperElement.classList.add('hidden');
  };

  const show = () => {
    effectLevelSliderWrapperElement.classList.remove('hidden');
  };


  const create = () => {
    noUiSlider.create(target, {
      range: {
        min: EffectsParams.none.min,
        max: EffectsParams.none.max,
      },
      start: EffectsParams.none.max,
      step: EffectsParams.none.step,
      connect: 'lower',
      format: {
        to: function (value) {
          return value;
        },
        from: function (value) {
          return parseFloat(value);
        },
      },
    });

    hide();
    attachListeners();
  };

  const updateImageEffect = (value, effectOptions) => {
    preview.style.filter = `${effectOptions.filter}(${value}${effectOptions.unit})`;
  };

  const clearImageEffects = () => {
    preview.style.filter = 'none';
  };

  const updateRangeSliderOptions = (options) => {
    target.noUiSlider.updateOptions({
      range: {
        min: options.min,
        max: options.max,
      },
      start: options.max,
      step: options.step,
      format: {
        to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
        from: (value) => parseFloat(value),
      }
    });
  };

  const clearRangeSliderOptions = () => {
    target.noUiSlider.updateOptions({
      range: {
        min: EffectsParams.none.min,
        max: EffectsParams.none.max,
      },
      start: EffectsParams.none.max,
      step: EffectsParams.none.step,
    });
  };

  const rangeSliderValueHandler = () => {
    effectLevelValueElement.value = target.noUiSlider.get();
    updateImageEffect(effectLevelValueElement.value, currentEffectOptions);
  };

  const settingInitialOptionsHandler = (e) => {
    if (!e.target.closest('.effects__radio')) {
      return;
    }

    currentEffect = Object.keys(EffectsParams).find((effect) => effect === e.target.value);
    currentEffectOptions = EffectsParams[currentEffect];

    if (currentEffect === 'none') {
      clearImageEffects();
      clearRangeSliderOptions();
      hide();
    } else {
      updateImageEffect(currentEffectOptions.max, currentEffectOptions);
      updateRangeSliderOptions(currentEffectOptions);
      show();
    }
  };

  const destroy = () => {
    detachListeners();
    target.noUiSlider.destroy();
  };

  function attachListeners() {
    target.noUiSlider.on('update', rangeSliderValueHandler);
    form.addEventListener('change', settingInitialOptionsHandler);
  }

  function detachListeners() {
    target.noUiSlider.off('update', rangeSliderValueHandler);
    form.removeEventListener('change', settingInitialOptionsHandler);
  }

  return {
    init: () => create(),
    destroy,
  };
};

export const effectSlider = createRangeSlider(
  effectLevelSliderElement,
  {
    form: uploadFormElement,
    preview: previewElement,
  },
);

export const initEffectSlider = () => {
  effectSlider.init();
};

export const destroyEffectSlider = () => {
  effectSlider.destroy();
};
