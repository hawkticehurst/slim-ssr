const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <style>
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
  </style>
  <button>Clicked <span id="count">0</span> times</button>
`;

class CounterButton extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.counterButton = this._shadowRoot.querySelector('button');
    this.count = this._shadowRoot.querySelector('#count');
    this.counterButton.addEventListener('click', this._increment.bind(this));
  }

  _increment(e) {
    e.preventDefault();
    this.count.textContent = Number(this.count.textContent) + 1;
  }
}

customElements.define('counter-button', CounterButton);
