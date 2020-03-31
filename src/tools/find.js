export const PrivinceCount = (key, data) => {
  let count = 0;
  data.filter(item => {
    if (item.origin === key) {
      count++;
    }
    return item;
  });
  return count;
};
