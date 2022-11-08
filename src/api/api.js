export const API = {
  test: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.trunc(100 * Math.random());
        resolve(random);
      }, 3000);
    });
  },
};
