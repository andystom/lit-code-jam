import { LitElement, html, customElement, property } from 'lit-element';

// ----------------------------------------------
// Import WebComponent polyfills for old browsers
import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';

// ----------------------------------------------
// Import dependent components
import './components/basic.component';
import './components/shyButton.component';

// ----------------------------------------------

@customElement('app-root')
export class AppRoot extends LitElement {

    // ------------------------------

    createRenderRoot() {
        return this;
    }

    // ------------------------------

    render() {
        return html`
            <h1>Lit Code Jam</h1>
            <basic-component username="Unnamed User"></basic-component>
            <shy-button-component> </shy-button-component>
        `;
    }

    // ------------------------------

}
