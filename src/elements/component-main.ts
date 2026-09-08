import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { html, unsafeStatic } from 'lit/static-html.js';

const routes = [
    {
        pattern: /^\/$/g,
        layout: 'layout-default',
        content: 'page-home',
    },
    {
        pattern: /^\/blog.*$/g,
        layout: 'layout-default',
        content: 'page-blog',
    },
    {
        pattern: { test: () => false },
        layout: 'layout-default',
        content: 'page-not-found',
    },
];

function findRoute() {
    for (let route of routes) {
        if (route.pattern.test(location.pathname)) {
            return route;
        }
    }

    return routes[routes.length - 1];
}

@customElement('component-main')
export class ComponentMain extends LitElement {
    static styles = css``;

    render() {
        let route = findRoute();

        let layoutTag = route.layout;
        let contentTag = route.content;

        return html`
            <${unsafeStatic(layoutTag)}>
                <${unsafeStatic(contentTag)}></${unsafeStatic(contentTag)}>
            </${unsafeStatic(layoutTag)}> 
        `;
    }
}
