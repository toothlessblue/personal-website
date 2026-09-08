import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-not-found')
export class PageNotFound extends LitElement {
    static styles = css``;

    render() {
        return html` <p style="margin: 20px;">404 page not found!</p> `;
    }
}
