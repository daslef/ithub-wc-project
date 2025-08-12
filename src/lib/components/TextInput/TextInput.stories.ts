import { html } from "lit-html";
import { TextInputComponent } from "./TextInput";

const PrimaryTemplate = ({}) =>
    html`<form><input-text></input-text></form>`;

export const Primary = PrimaryTemplate.bind({});

export default {
    title: "Components/Inputs/TextInput",
    component: "input-text",
}
