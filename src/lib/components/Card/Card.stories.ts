import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { CardComponent } from "./Card";

type Args = {
  image: string,
  headline: string,
  content: string,
  link: string
}

export const Card: StoryObj<Args> = {
  args: {
    image: 'https://images.unsplash.com/photo-1612392167062-8f76710986ba?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    headline: 'Food',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr ud exercitation ullamco laboris nisi ut aliquip ex ea comamodo consequat.',
    link: 'Read'
  }
}

export default {
  title: 'Components/CardComponent',
  render: ({ image, headline, content, link }: Args) => {
    return `<card-component>
              <img slot="header" src="${image}" alt="food image">
              <h4 slot="header">${headline ?? ""}</h4>
              <p slot="content">${content ?? ""}</p>
              <a href="#" slot="footer">${link ?? ""}</a>
           </card-component>`
  },
  argTypes: {
    image: {
      control: { type: 'text' },
    },
    headline: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
    link: {
      control: { type: 'text' },
    },
  }
} satisfies Meta<Args>
