class CounterButton extends HTMLElement {
  static styles = /* css */ `
    button {
      font-family: inherit;
      font-size: inherit;
      background-color: #efefef;
      border: 2px solid #000;
      border-radius: 8px;
      padding: 6px 10px;
    }
    button:hover,
    button:focus {
      cursor: pointer;
      outline: none;
      background-color: #e6e6e6;
    }
  `;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.count = this.shadow.querySelector('#count');
    const counterButton = this.shadow.querySelector('button');
    counterButton.addEventListener('click', this.increment.bind(this));
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = /* html */ `
      <style>
        ${CounterButton.styles}
      </style>
      <button>Clicked <span id="count">0</span> times</button>
    `;
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  increment() {
    this.count.textContent = Number(this.count.textContent) + 1;
  }
}

customElements.define('counter-button', CounterButton);
