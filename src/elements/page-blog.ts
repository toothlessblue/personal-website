import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { until } from 'lit/directives/until.js';
import { marked } from 'marked';
import blogIndex from '../blog_index.json?raw';
import { formatRelative } from 'date-fns';

@customElement('page-blog')
export class PageBlog extends LitElement {
    static styles = css`
        :host {
            display: block;
            margin: auto;
            max-width: 1000px;
        }

        img {
            max-width: 100%;
            max-height: 1000px;
        }

        pre {
            padding: 10px;
            border-radius: 10px;
            border: 1px solid grey;
            background: #010101;
        }
    `;

    async fetchAndRenderEntry(blogSlug: string) {
        let mdFile = await (await fetch(`/blog_files/${blogSlug}`)).text();
        return unsafeHTML(await marked.parse(mdFile));
    }

    renderIndex() {
        return html`
            <h1 style="margin: 20px;">Blog</h1>
            <div style="margin: 20px;">
                ${JSON.parse(blogIndex).map(
                    (_: any) => html`
                        <a class="blogTile" href="/blog/${_.name}.md">
                            <p>${_.name} - ${formatRelative(new Date(_.created), new Date())}</p>
                        </a>
                    `
                )}
            </div>
        `;
    }

    renderEntry(blogSlug: string) {
        return html` <div style="margin: 20px;">${until(this.fetchAndRenderEntry(blogSlug), 'Loading...')}</div> `;
    }

    render() {
        let blogSlug = location.pathname.split('/')[2];

        if (blogSlug !== undefined && blogSlug.length > 0) {
            return this.renderEntry(blogSlug);
        } else {
            return this.renderIndex();
        }
    }
}
