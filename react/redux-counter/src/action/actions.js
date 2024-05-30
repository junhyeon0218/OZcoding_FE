export const increment = () => ({
  type: "INCREMENT",
});

export const oneSecIncrement = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: "ONESEC_INCREMENT",
    });
  }, 1000);
};
