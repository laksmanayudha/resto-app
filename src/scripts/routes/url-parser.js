const URLParser = {
  parseActiveWithCombiner() {
    const url = window.location.hash.slice(1).toLocaleLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveWithoutCombiner() {
    const url = window.location.hash.slice(1).toLocaleLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const splitedUrl = url.split('/');
    return {
      resource: splitedUrl[1] || null,
      id: splitedUrl[2] || null,
      verb: splitedUrl[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.id ? '/:id' : '')
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

export default URLParser;
