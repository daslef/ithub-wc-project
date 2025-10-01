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
      </style>

      <article class="card">
    
      </article>
    `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define("card-component", CardComponent);
