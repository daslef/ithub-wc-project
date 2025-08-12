export class CardComponent extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');

        template.innerHTML = `
            <style>
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
                }
            </style>

            <article>
                <header><slot name="header"></slot></header>
                <section><slot name="content"></slot></section>
                <footer><slot name="footer"></slot></footer>
            </article>
        `

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('card-component', CardComponent);
