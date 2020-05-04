import { customElement, html, LitElement, CSSResult, property } from "lit-element";

// -------------------------------------------------

import styles from './shyButton.component.scss';

@customElement('shy-button-component')
export class ShyButtonComponent extends LitElement {

    constructor() {
        super();
    }

    // ----------------------------------------------------------
    // ----------------------------------------------------------
    // ----------------------------------------------------------

    static get styles() { return styles as CSSResult; }

    public render() {
        return html`
            <button type="button"> Something </button>
        `;
    }
}

