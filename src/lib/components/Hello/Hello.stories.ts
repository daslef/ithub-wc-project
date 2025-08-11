import { HelloComponent } from "./Hello";

const PrimaryTemplate = () => `<hello-component></hello-component>`;

export const HelloStory = PrimaryTemplate.bind({});

export default {
    title: "Components/HelloComponent",
};
