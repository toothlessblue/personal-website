import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('layout-default')
export class LayoutDefault extends LitElement {
    static styles = css``;

    render() {
        return html`
            <component-header></component-header>
            <slot></slot>
        `;
    }
}
