// import type { TextInputInterface } from "./types";

// export function validate(elem: TextInputInterface, showError: boolean) {
//   if (!elem.validator || !elem.validator.validations) {
//     return;
//   }

//   const messageElement = elem.shadowRoot?.querySelector('.message');
//   let hasError = false;

//   if (messageElement) {
//     messageElement.innerHTML = '';
//   }

//   for (const validator of elem.validator.validations) {
//     if (validator.condition(elem)) {
//       elem.setValidity(validator.flag, validator.message);
//       hasError = true;

//       if (!showError) {
//         return
//       }

//       elem.input?.classList.add('error');

//       if (messageElement) {
//         const pElement = document.createElement('p');
//         pElement.innerHTML = validator.message ?? "";
//         messageElement.appendChild(pElement);
//       }
//     }
//   }

//   if (!hasError) {
//     elem.setValidity({});

//     if (elem.input) {
//       elem.input.classList.remove('error');
//     }

//     if (messageElement) {
//       messageElement.innerHTML = '';
//     }
//   }

//   elem.dispatchEvent(new CustomEvent('validate', { bubbles: true }));
// }

