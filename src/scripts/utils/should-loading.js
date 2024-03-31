const shouldLoading = async ({
  todo = async () => {},
  loading = () => {},
  timeout = 300,
}) => {
  const timer = setTimeout(() => {
    loading();
  }, timeout);
  const results = await todo();
  clearTimeout(timer);
  return results;
};

export default shouldLoading;
