class Component extends HTMLElement {
  constructor() {
    super();
    this.state = {};
  }

  async connectedCallback() {
    this.render();
    await this.effect();
    await this.afterEffect();
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

  selector(query) {
    return () => this.querySelector(query);
  }

  selectorAll(query) {
    return () => this.querySelectorAll(query);
  }

  documentSelector(query) {
    return () => document.querySelector(query);
  }

  documentSelectorAll(query) {
    return () => document.querySelectorAll(query);
  }

  // to be implemented by children
  async effect() {}

  // to be implemented by children
  render() {}

  // to be implemented by children
  async afterEffect() {}
}

export default Component;
