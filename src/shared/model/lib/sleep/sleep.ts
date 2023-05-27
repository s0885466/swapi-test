export const sleep = async (time = 1000) => {
  return new Promise((res) => {
    setTimeout(res, time);
  });
};
