// import { html } from "lit-html";
// import type { Meta, StoryObj } from '@storybook/web-components-vite';

// import { TextInputComponent } from "./TextInput";
// import type { Validator, ValidatorsMapping, TextInputInterface } from "./types";

// const validators: ValidatorsMapping = {
//   username: {
//     validations: [
//       {
//         flag: { valueMissing: true },
//         message: "Error: Required",
//         condition: (input: TextInputInterface) => input.required && input.value.length === 0,
//       },
//       {
//         flag: { badInput: true },
//         message: "Error: Incorrect username",
//         condition: (input: TextInputInterface) => input.value.length > 0 && !(/^[a-zA-Z]+$/.test(input.value)),
//       },
//     ],
//   },
// };

// type Args = { disabled?: boolean, onValidate?: () => void, required?: boolean }

// export const Primary: StoryObj<Args> = {
//   args: {
//     required: false,
//     disabled: false,
//     onValidate: () => {
//       const element: TextInputInterface = document.querySelector("input-text[name]")!;
//       if (!element!.validity.valid) {
//         console.warn('INVALID');
//       } else {
//         console.log('VALID');
//       }
//     }
//   },
//   play: () => {
//     const element: TextInputInterface = document.querySelector(`[name="username"]`)!;
//     element.validator = validators["username"];
//     console.log(element.validator)
//   }
// }

// export const Required: StoryObj<Args> = {
//   args: {
//     required: true,
//     disabled: false,
//     onValidate: () => {
//       const element: TextInputInterface = document.querySelector(`[name="username"]`)!;
//       if (!element!.validity.valid) {
//         console.warn('INVALID');
//       } else {
//         console.log('VALID');
//       }
//     }
//   },
//   play: () => {
//     const element: TextInputInterface = document.querySelector(`[name="username"]`)!;
//     element.validator = validators["username"];
//   }
// }

// export const Disabled: StoryObj<Args> = {
//   args: {
//     required: false,
//     disabled: true
//   },
// }

// export const Error: StoryObj<Args> = {
//   args: {
//     required: true,
//     disabled: false
//   },
//   play: () => {
//     const element: TextInputInterface = document.querySelector(`[name="username"]`)!;
//     element.validator = validators["username"];
//     element.focus();
//     element.blur();
//   }
// }

// export default {
//   title: "Components/Inputs/TextInput",
//   component: "input-text",
//   render: ({ onValidate, disabled = false, required = false }: Args) => html`<form @validate="${onValidate}">
//         <input-text class="form-control" name="username" ?required=${required} ?disabled=${disabled}></input-text>
//       </form>`,
//   argTypes: {
//     onValidate: { control: false }
//   }
// } satisfies Meta

import { html } from "lit-html";
import { TextInputComponent } from "./TextInput";
import type { Validator, ValidatorsMapping, TextInputInterface } from './types'

const validators: ValidatorsMapping = {
  username: {
    validations: [
      {
        flag: { valueMissing: true },
        message: "Error: Required",
        condition: (input) => input.required && input.value.length === 0,
      },
    ],
  },
};

export const Primary = {
  play: () => {
    const element: TextInputInterface = document.querySelector("input-text[name]")!;
    const elementName = element.getAttribute("name")!
    element.validator = validators[elementName];
    console.log(element.validator)

    element.required = true

    for (const rule of element.validator.validations) {
      if (rule.condition(element)) {
        console.log(rule.message)
      }
    }
  }
}

export default {
  title: "Components/Inputs/TextInput",
  component: "input-text",
  render: () => html`<form><input-text name="username"></input-text></form>`
}
