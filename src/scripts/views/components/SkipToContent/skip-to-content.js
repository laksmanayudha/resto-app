import Component from '../component';

class SkipToContent extends Component {
  constructor() {
    super();
    this.state = {
      target: this.getAttribute('target'),
    };
  }

  render() {
    this.innerHTML = `<a href="${this.state.target}" id="skipToContent" tabindex="0">Skip to content</a>`;
    this._invokeEventListener();
  }

  _invokeEventListener() {
    const skipToContent = this.querySelector('#skipToContent');
    skipToContent.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(this.state.target);
      if (target) {
        target.style.outline = 'none';
        target.tabIndex = 0;
        target.focus();
        this._scrollToNavbar(target);
      }
    });
  }

  _scrollToNavbar(target) {
    const appBar = document.querySelector('app-bar');
    const targetCoordinate = target.getBoundingClientRect();
    const appBarCoordinate = appBar.getBoundingClientRect();
    const topCoordinate = targetCoordinate.top - appBarCoordinate.height;
    window.scrollBy(0, topCoordinate);
  }
}

customElements.define('skip-to-content', SkipToContent);
export default SkipToContent;
