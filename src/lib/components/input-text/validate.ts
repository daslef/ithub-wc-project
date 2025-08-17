export default function validate(element: any, showError: boolean) {
  if (!element.validator || !element.validator.validations) {
    return;
  }

  const messageElement = element.shadowRoot.querySelector(".message");

  if (messageElement) {
    messageElement.innerHTML = "";
  }


  let invalid = false;

  for (const validator of element.validator.validations) {
    if (validator.condition(element)) {
      element.setValidity(validator.flag, validator.message);
      invalid = true;

      if (!showError) {
        return
      }

      element.input?.classList.add('error');

      if (messageElement) {
        const pElement = document.createElement('p');
        pElement.innerHTML = validator.message;
        messageElement.appendChild(pElement);
      }

    }
  }

  if (!invalid) {
    element.setValidity({});

    if (element.input) {
      element.input.classList.remove('error');
    }

    messageElement.innerHTML = '';
  }

  element.dispatchEvent(new CustomEvent("validate", { bubbles: true }));
}
