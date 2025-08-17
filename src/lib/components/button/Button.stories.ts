import { html } from "lit-html";
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { ButtonComponent } from "./Button";
import iconBookmark from './assets/icon-bookmark.svg'
import iconX from './assets/icon-x.svg'

type TextArgs = {
  label: string,
  variant: "primary" | "secondary"
}

type IconArgs = {
  variant: "icon",
  icon: "bookmark" | "x";
}

type Args = (TextArgs | IconArgs) & { disabled?: boolean }

export const Primary: StoryObj<Args> = {
  args: {
    label: "Тест",
    variant: "primary"
  }
}

export const Secondary: StoryObj<Args> = {
  args: {
    label: "Тест",
    variant: "secondary"
  }
}

export const Icon: StoryObj<Args> = {
  args: {
    variant: "icon",
    icon: "bookmark"
  }
}

export const Disabled: StoryObj<Args> = {
  args: {
    variant: "primary",
    label: "Тест",
    disabled: true
  }
}

export default {
  title: "Components/Button",
  component: "button-component",
  argTypes: {
    icon: {
      control: { type: "select" },
      options: ['x', 'bookmark']
    }
  },
  render: (args: Args) => {
    if (args.variant === "icon") {
      const icons = {
        bookmark: iconBookmark,
        x: iconX
      }

      return html`
        <button is="button-component" class=${args.variant} ?disabled=${args.disabled}>
          <img src=${icons[args.icon]} alt=${args.icon} />
        </button>
      `
    }

    return html`<button is="button-component" class=${args.variant} ?disabled=${args.disabled}>${(args as TextArgs).label}</button>`
  }
} satisfies Meta<Args>
