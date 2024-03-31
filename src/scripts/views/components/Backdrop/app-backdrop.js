import Component from '../component';

class AppBackdrop extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  set show(show) {
    this.setState({ show });
  }

  render() {
    const { show } = this.state;
    if (show) {
      this.innerHTML = `
      <div
        style="
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, .5);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1;
        "
      ></div>`;
    } else {
      this.innerHTML = '';
    }
  }
}

customElements.define('app-backdrop', AppBackdrop);
export default AppBackdrop;
