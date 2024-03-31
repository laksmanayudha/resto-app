const debounce = ({
  todo = async () => {},
  preTodo = () => {},
  timeout = 300,
}) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    if (timer === null) preTodo();

    timer = setTimeout(async () => {
      await todo(...args);
      timer = null;
    }, timeout);
  };
};

export default debounce;
