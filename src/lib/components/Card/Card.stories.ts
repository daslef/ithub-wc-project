import "./Card";
import type { Meta, StoryObj } from "@storybook/web-components-vite";

export const CardDefault: StoryObj = {
  args: {
    hasImage: true,
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Stereogram_Tut_Random_Dot_Shark.png",
  },
};

export const CardWithoutImage: StoryObj = {
  args: {
    hasImage: false,
  },
};

export default {
  title: "Components/Card",
  render: ({ imageSrc, hasImage }) => {
    if (hasImage) {
      return `
        <card-component>
          <img slot="image" src=${imageSrc} alt="stereogram" /> }
        </card-component>
      `;
    }

    return `<card-component></card-component>`;
  },
} satisfies Meta;
