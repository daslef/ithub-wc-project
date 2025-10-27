const buttonStyles = `
  .button {
    box-sizing: border-box;
    font-size: var(--font-body-md);
    font-weight: var(--font-weight-button);
    cursor: pointer;
    padding: 0;
  }

  .button--primary {
    background: var(--color-blue-500);
    border: 2px solid var(--color-blue-500);
    border-radius: 12px;
    min-height: 44px;
    min-width: 180px;
    color: var(--color-white);
  }

  .button--secondary {
    background-color: white;
    color: #007AFF;
  }
`

export default class ButtonComponent extends HTMLButtonElement {
  constructor() {
    super()
    this.addStylesheet()
    this.classList.add("button")
  }

  addStylesheet() {
    if (document.head.querySelector('#button-component-styles')) {
      return
    }

    const buttonStylesElement = document.createElement("style")
    buttonStylesElement.textContent = buttonStyles
    buttonStylesElement.setAttribute("id", "button-component-styles")

    document.head.appendChild(buttonStylesElement)
  }
}

customElements.define("button-component", ButtonComponent, { extends: "button" })
