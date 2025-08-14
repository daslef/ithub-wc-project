import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { HelloComponent } from "./Hello";

export const Hello: StoryObj<{}> = {}

export default {
  title: "Components/HelloComponent",
  render: () => `<hello-component></hello-component>`,
} satisfies Meta<{}>
