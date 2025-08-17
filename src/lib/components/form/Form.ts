import type { Validator } from '../input-text/validate'

type ValidatedHTMLElement = HTMLElement & { validator : Validator }
type ValidatorsObject = { [K: string] : Validator }

export class FormComponent extends HTMLFormElement {
  constructor() {
    super()
  }

  set validator(validatorsObject: ValidatorsObject) {
    for (const prop in validatorsObject) {
      const formElement: ValidatedHTMLElement | null = this.querySelector(`[name=${prop}]`)
      if (formElement) {
        formElement.validator = validatorsObject[prop]
      }
    }
  }

}

customElements.define('form-component', FormComponent, { extends: 'form' })
