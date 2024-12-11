export const createIdGenerator = () => {
  let currentId = 0;
  return () => ++currentId;
};
