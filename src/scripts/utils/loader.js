/* eslint-disable no-param-reassign */
const Loader = (element, message = '') => {
  const originalContent = element.innerHTML;
  return {
    startLoading() {
      element.innerHTML = `<i class="fa fa-spinner fa-spin"></i> ${message}`;
      element.setAttribute('disabled', true);
    },

    stopLoading() {
      element.innerHTML = originalContent;
      element.removeAttribute('disabled');
    },
  };
};

export default Loader;
