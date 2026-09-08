import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-home')
export class PageHome extends LitElement {
    static styles = css`
        p {
            margin: 20px;
        }
    `;

    render() {
        return html` 
            <p>Hello world!</p>
        `;
    }
}
