const Filler = {
  isEmpty(value) {
    if (typeof value === 'object') {
      if (value.constructor === Object) {
        return Object.keys(value).length === 0;
      }

      if (value.constructor === Array) {
        return value.length === 0;
      }
    }

    return !value;
  },
};

export default Filler;
