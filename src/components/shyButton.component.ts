import { customElement, html, LitElement, CSSResult, property } from "lit-element";

// -------------------------------------------------

import styles from './shyButton.component.scss';

@customElement('shy-button-component')
export class ShyButtonComponent extends LitElement {

    @property() private text : string = "";
    @property() private oldDistance : number = 0;

    constructor() {
        super();
        
        window.addEventListener('mousemove', e => {

            var current = this.getBoundingClientRect();
            var buttonCenterX = current.left + current.width / 2;
            var buttonCenterY = current.top + current.height / 2;

            var distanceX = e.offsetX - buttonCenterX;
            var distanceY = e.offsetY - buttonCenterY;
            var absDistanceX = distanceX >= 0 ? distanceX : -distanceX;
            var absDistanceY = distanceY >= 0 ? distanceY : -distanceY;
            var manhattanDistance = absDistanceX + absDistanceY;

            if (manhattanDistance < this.oldDistance && manhattanDistance < 100) {
                var shiftX = distanceX >= 0 ? -90 : 30;
                var shiftY = distanceY >= 0 ? -30 : 30;
                var newX = e.offsetX + shiftX;
                var newY = e.offsetY + shiftY;

                if (newX < 0) newX = 0;
                if (newY < 0) newY = 0;
                if (newX > 300) newX = 300;
                if (newY > 300) newY = 300;

                // Setting the SCSS property
                document.documentElement.style.setProperty('--mouse-x', newX + "px");
                document.documentElement.style.setProperty('--mouse-y', newY + "px");
                this.text = 'Or not';

            } else {
                this.text = "I'm Shy";
            }
            document.documentElement.style.setProperty('--color', `rgba(255, 0, 0, ${Math.max(1-0.005*manhattanDistance, 0)})`);

            
            this.oldDistance = manhattanDistance;
        });
    }

    // ----------------------------------------------------------
    // ----------------------------------------------------------
    // ----------------------------------------------------------

    static get styles() { return styles as CSSResult; }

    public render() {
        return html`<button
                type="button"> 
                ${this.text}
            </button>
        `;
    }
}

