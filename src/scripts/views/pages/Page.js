class Page extends HTMLElement {
  constructor() {
    super();
    this.state = {};
  }

  async connectedCallback() {
    this.render();
    await this.effect();
    this.afterEffect();
  }

  set state(state) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  setState(state) {
    this.state = { ...this.state, ...state };
    this.render();
  }

  // to be implemented by children
  async effect() {}

  // to be implemented by children
  render() {}

  // to be implemented by children
  afterEffect() {}
}

export default Page;
