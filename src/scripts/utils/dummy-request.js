const DummyRequest = {
  send(toDo = async () => {}, waitForInSeconds = 1000) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const results = await toDo();
        resolve(results);
      }, waitForInSeconds);
    });
  },
};

export default DummyRequest;
