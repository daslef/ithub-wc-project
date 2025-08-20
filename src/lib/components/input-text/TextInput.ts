import type { Validator } from "./types";
import validate from "./validate";

export class TextInputComponent extends HTMLElement {
  static formAssociated = true;

  // @ts-ignore
  private internals: ElementInternals;

  public validator: Validator | null = null;

  private attr: { [K: string]: string } = {};

  constructor() {
    super();
    this.internals = this.attachInternals();

    const template = document.createElement('template')
    template.innerHTML = `
            <style>
              :host {
                  display: block;
                  font-family: var(--font-default);
                  font-size: var(--font-body-sm);
              }
              input {
                  height: var(--input-min-dimension);
                  width: 100%;
                  border-radius: var(--radius-sm);
                  border: var(--border-default);
                  font-size: var(--font-body-md);
                  padding-left: var(--padding-sm);
                  outline: none;
                  box-sizing: border-box;
              }
              input:focus,
              input:focus:hover,
              input:active {
                  border: var(--border-focus);
              }
              .error,
              .error:hover,
              .error:focus,
              .error:active {
                  border: var(--border-error);
                  outline: none;
                  box-shadow: none;
                  color: var(--color-error);
              }
              .message {
                  margin-top: var(--margin-xxs);
                  color: var(--color-error);
                  font-weight: var(--font-weight-default);
              }
              input[disabled] {
                  opacity: var(---color-disable);
                  background: var(--color-disable);
                  border: var(--border-disable);
              }

              input[disabled]:hover,
              input[disabled]:focus,
              input[disabled]:active {
                  border: var(--border-disable);
                  outline: none;
                  box-shadow: none;
              }
            </style>

            <section class="control">
                <input type="text" />
            </section>
            <section class="message"></section>`

    this.attachShadow({ mode: 'open' })
    this.shadowRoot!.append(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.input.onblur = () => {
      this.onValidate(true);
    };

    for (const prop in this.attr) {
      this.input.setAttribute(prop, this.attr[prop]);
    }

    this.onValidate(false);
  }

  checkValidity() {
    return this.internals.checkValidity();
  }

  reportValidity() {
    return this.internals.reportValidity();
  }

  get validity() {
    return this.internals.validity;
  }

  get validationMessage() {
    return this.internals.validationMessage;
  }

  setValidity(
    flags: ValidityStateFlags,
    message?: string,
    anchor?: HTMLElement
  ): void {
    this.internals.setValidity(flags, message, anchor);
  }

  get input(): HTMLInputElement {
    return this.shadowRoot!.querySelector("input")!;
  }

  get value(): string {
    return this.input.value;
  }

  set value(newValue: string) {
    this.input.value = newValue
  }

  get required(): boolean {
    return this.input.required;
  }

  set disabled(value: boolean | string) {
    if (String(value) === "true") {
      this.input.setAttribute("disabled", "true");
    }

    if (String(value) === "false") {
      this.input.removeAttribute("disabled");
    }
  }

  get disabled() {
    return this.input.disabled;
  }

  set required(value: boolean | string) {
    if (String(value) === "true") {
      this.input.setAttribute("required", "required");
    }

    if (String(value) === "false") {
      this.input.removeAttribute("required");
    }
  }

  static get observedAttributes() {
    return ["required", "value", "disabled"];
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  attributeChangedCallback(name: string, _: string | null, next: string) {
    this.attr[name] = next;

    switch (name) {
      case "value":
        this.value = next;
        break;
      case "required":
        this.required = next;
        break;
      case "disabled":
        this.disabled = next
    }
  }

  onValidate(showError: boolean) {
    validate(this, showError);
  }
}

customElements.define('input-text', TextInputComponent)
