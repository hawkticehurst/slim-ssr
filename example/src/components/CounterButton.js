class CounterButton extends HTMLElement {
  static styles = /* css */ `
    ::slotted(button) {
      font-family: inherit;
      font-size: inherit;
      background-color: #efefef;
      border: 2px solid #000;
      border-radius: 8px;
      padding: 6px 10px;
    }
    ::slotted(button:hover),
    ::slotted(button:focus) {
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
    const counterButton = this.shadow.querySelector('slot').assignedElements()[0];
    counterButton.addEventListener('click', this.increment.bind(this));
    this.count = counterButton.querySelector('#count');
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = /* html */ `
      <style>
        ${CounterButton.styles}
      </style>
      <slot></slot>
    `;
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  increment() {
    this.count.textContent = Number(this.count.textContent) + 1;
  }
}

customElements.define('counter-button', CounterButton);
