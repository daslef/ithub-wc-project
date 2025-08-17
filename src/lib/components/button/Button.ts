export class ButtonComponent extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add('button-component');
    this.addStylesheet();
  }

  addStylesheet() {
    const head = document.head;
    if (document.querySelector(`#button-component-style`)) {
      return;
    }

    const style = document.createElement('style');
    style.setAttribute('id', `button-component-style`);
    style.textContent = buttonStyles;
    head.appendChild(style);
  }
}

const buttonStyles = `
    .button-component {
        box-sizing: border-box;
        font-size: var(--font-body-md);
        font-weight: var(--font-weight-button);
        cursor: pointer;
        padding: 0;
    }
    .button-component.primary {
        background: var(--color-blue-500);
        border: 2px solid var(--color-blue-500);
        border-radius: 12px;
        min-height: 44px;
        min-width: 180px;
        color: var(--color-white);
    }
   .button-component.secondary {
        background: var(--color-white);
        border: 2px solid var(--color-blue-500);
        border-radius: 12px;
        min-height: 44px;
        min-width: 180px;
        color: var(--color-blue-500);
    }
   .button-component.icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-white);
      border: 2px solid var(--color-blue-500);
      border-radius: 12px;
      height: 44px;
      width: 44px;
      color: var(--color-blue-500);
      padding: var(--padding-xs);
    }
    .button-component.icon svg {
        width: 100%;
        height: 100%;
    }
    .button-component:focus {
      background: var(--color-white);
      color: var(--color-black);
      border: 2px solid var(--color-black);
      outline: none;
    }
    .button-component:active {
      background: var(--color-white);
      color: var(--color-neutral-500);
      border: 2px solid var(--color-neutral-500);
      outline: none;
    }
    .button-component[disabled] {
      opacity: var(---color-disable);
      background: var(--color-disable);
      border: var(--border-disable);
      color: var(--color-neutral-500);
      cursor: default;
      pointer-events: none;
    }
`;

customElements.define('button-component', ButtonComponent, { extends: 'button' })
