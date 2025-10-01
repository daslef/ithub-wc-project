export default class CardComponent extends HTMLElement {
  private template;

  constructor() {
    super();

    this.template = document.createElement("template");
    this.template.innerHTML = `
      <style>
        .card {
          min-height: 377px;
          width: 320px;
          border-radius: 16px;
          background-color: white;
          box-shadow: var(--shadow);
        }

        .card__header {
          height: 180px;
          width: 100%;
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }

        ::slotted(img) {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }
      </style>

      <article class="card">
        <header class="card__header">
          <slot name="image"></slot>
        </header>
      </article>
    `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define("card-component", CardComponent);
