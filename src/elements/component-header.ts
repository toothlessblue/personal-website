import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('component-header')
export class ComponentHeader extends LitElement {
    static styles = css`
        :host {
            display: block;
            border-bottom: 1px solid #fefefe;
            padding: 10px 10px;
        }

        h1 {
            margin: 0;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li {
            display: inline;
        }

        a {
            padding: 10px;
            display: inline-block;
            text-decoration: underline;
        }

        a:any-link {
            color: white;
        }
    `;

    render() {
        return html`
            <h1>toothlessblue</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        `;
    }
}

