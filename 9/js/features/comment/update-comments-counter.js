export const updateShownCommentsCounterFabric = (currentCommentsShownNumber, commentsTotalNumber, step) => (() => {
  currentCommentsShownNumber += step;
  return Math.min(currentCommentsShownNumber, commentsTotalNumber);
});
