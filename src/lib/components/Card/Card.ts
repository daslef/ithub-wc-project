import { Component, html, css, attachShadow, attachStyle } from "../../easy-wc";

@Component({
  selector: "card-component",
  template: html`
    <article>
        <header><slot name="header"></slot></header>
        <section><slot name="content"></slot></section>
        <footer><slot name="footer"></slot></footer>
    </article>`,
  style: css`
      :host {
          display: block;
          background: var(--color-white);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow);
          overflow: hidden;
          max-width: 320px;
      }
      ::slotted(a:link), ::slotted(a:visited) {
          display: block;
      }
      ::slotted(*) {
          padding-left: var(--padding-lg);
          padding-right: var(--padding-lg);
      }
      ::slotted(:last-child) {
          padding-bottom: var(--margin-lg);
      }
      ::slotted(img) {
          width: 100%;
          padding-left: 0px;
          padding-right: 0px;
      }`
})
export class CardComponent extends HTMLElement {
  constructor() {
    super();
    attachShadow(this)
    attachStyle(this)
  }
}
