import './Card'
import type { Meta, StoryObj } from '@storybook/web-components-vite'

export const CardDefault: StoryObj = {}
export const CardWithoutImage: StoryObj = {}

export default {
  title: "Components/Card",
  render: () => `<card-component></card-component>`
} satisfies Meta
