export class TextInputComponent extends HTMLElement {
    static formAssociated = true;
    private internals: ElementInternals;

    constructor() {
        super();
        this.internals = this.attachInternals();

        const template = document.createElement('template')
        template.innerHTML = `
            <section class="control">
                <input type="text" />
            </section>
            <section class="message"></section>`

        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.append(template.content.cloneNode(true))
    }
}

customElements.define('input-text', TextInputComponent)
