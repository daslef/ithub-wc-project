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


import { html } from "lit-html";
import type { Meta, StoryObj } from '@storybook/web-components-vite';
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

type Args = {
  onValidate: () => void,
  disabled: boolean,
  required: boolean
}

export const Primary: StoryObj<Args> = {
  play: () => {
    const element: TextInputInterface = document.querySelector("input-text[name]")!;
    const elementName = element.getAttribute("name")!
    element.validator = validators[elementName];
    console.log(element.validator)

    for (const rule of element.validator.validations) {
      if (rule.condition(element)) {
        console.log(rule.message)
      }
    }
  },
  args: {
    onValidate: () => {
      const element: TextInputInterface = document.querySelector("input-text[name]")!;
      console.log(element!.validity.valid ? 'VALID' : 'INVALID')
    },
    disabled: false,
    required: false
  }
}

export const Required: StoryObj<Args> = {
  play: () => {
    const element: TextInputInterface = document.querySelector(`[name="username"]`)!;
    element.validator = validators["username"];
    console.log(element.validator)

    for (const rule of element.validator.validations) {
      if (rule.condition(element)) {
        console.log(rule.message)
      }
    }
  },
  args: {
    required: true,
    disabled: false,
    onValidate: () => {
      const element: TextInputInterface = document.querySelector(`[name="username"]`)!;
      console.log(element!.validity.valid ? 'VALID' : 'INVALID')
    }
  },
}

export const Error: StoryObj<Args> = {
  args: {
    required: true,
    disabled: false
  },
  play: () => {
    const element: TextInputInterface = document.querySelector(`[name="username"]`)!;
    element.validator = validators["username"];
    element.input.focus();
    element.input.blur();
  }
}

export const Disabled: StoryObj<Args> = {
  args: {
    required: false,
    disabled: true
  },
}


export default {
  title: "Components/Inputs/TextInput",
  component: "input-text",
  argTypes: {
    onValidate: {
      control: false
    }
  },
  render: ({ onValidate, disabled, required }: Args) => html`<form @validate=${onValidate}><input-text name="username" ?required=${required} ?disabled=${disabled}></input-text></form>`
} as Meta<Args>
