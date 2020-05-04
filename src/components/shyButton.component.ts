import { customElement, html, LitElement, CSSResult, property } from "lit-element";

// -------------------------------------------------

import styles from './shyButton.component.scss';

@customElement('shy-button-component')
export class ShyButtonComponent extends LitElement {

    @property()
    private distance : number = 0;
    private oldX : number = 0;
    private oldY : number = 0;

    constructor() {
        super();
        
        // this.position = this.getBoundingClientRect();

        window.addEventListener('mousemove', e => {
            this.distance = e.offsetX - this.oldX;
            this.oldX = e.offsetX;
            this.oldY = e.offsetY;
        });
    }

    // ----------------------------------------------------------
    // ----------------------------------------------------------
    // ----------------------------------------------------------

    static get styles() { return styles as CSSResult; }

    public render() {
        var isMovingLeft = this.distance > 0;
        if (isMovingLeft){
        return html`
            <button 
                onmouseover="this.style.backgroundColor = '#FFB6C1'"
                onmouseleave="this.style.backgroundColor = null" 
                type="button"> 
                "I'm shy"
            </button>
        `;
        }

        return html`
        <button 
            onmouseover="this.style.backgroundColor = '#bb1830'"
            onmouseleave="this.style.backgroundColor = null" 
            type="button"> 
            "I'm shy"
        </button>
    `;
    }
}

