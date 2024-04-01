const Filler = {
  isEmpty(value) {
    if (value.construcor === Object) {
      return Object.keys(value).length === 0;
    }

    if (value.construcor === Array) {
      return value.length === 0;
    }

    return !!value;
  },
};

export default Filler;
