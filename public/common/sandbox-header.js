import { teal, tealDark, title, orange } from "./theme/index.js"

export const logoPath =
  "M117.8,16.6v17.1c0,2.4-1.9,4.3-4.2,4.3s-4.2-1.9-4.2-4.3v-17.1c0-2.4,1.9-4.3,4.2-4.3s4.2,1.9,4.2,4.3ZM34.6,12.3c-2.3,0-4.2,1.9-4.2,4.3v17.1c0,2.4,1.9,4.3,4.2,4.3s4.2-1.9,4.2-4.3v-17.1c0-2.4-1.9-4.3-4.2-4.3ZM113.5,10.5c2.3,0,4.2-1.9,4.2-4.3s-1.9-4.3-4.2-4.3-4.2,1.9-4.2,4.3,1.9,4.3,4.2,4.3ZM34.6,2c-2.3,0-4.2,1.9-4.2,4.3s1.9,4.3,4.2,4.3,4.2-1.9,4.2-4.3-1.9-4.3-4.2-4.3ZM55.4,30.7c-.1-.3-.4-.5-.7-.4-.9.3-1.9.6-3,.5-1.3,0-2.3-1-2.3-2.3v-8.4c0-.2.2-.4.4-.4h4c.4,0,.7-.3.7-.7v-5.6c0-.4-.3-.7-.7-.7h-4c-.2,0-.4-.2-.4-.4v-5.1c0-.5-.4-.8-.9-.7l-6.5,1.6c-.3,0-.5.4-.5.7v20.1c0,5.2,2.6,8.9,9.6,8.9s5.1-.9,6.8-2c.3-.2.3-.6,0-.8-.7-.8-1.9-2.5-2.6-4.4ZM107.1,12.8h-7c-.5,0-.9.3-1,.7l-4.4,13.5c0,.2-.4.2-.5,0l-4.4-13.5c-.1-.4-.6-.7-1-.7h-7c-.5,0-.8.5-.7,1l7.3,20h0c.9,2.5,3.3,4.2,6,4.2s5.1-1.7,6-4.2l7.3-20c.2-.5-.2-1-.7-1ZM82.3,25.2c0,7.1-5.7,12.8-12.8,12.8s-12.8-5.7-12.8-12.8,5.7-12.8,12.8-12.8,12.8,5.7,12.8,12.8ZM74.3,26.4c0-2.9-1.8-7.6-5-7.6s-5,4.7-5,7.6,1.7,5.2,5,5.2,5-2.6,5-5.2ZM28.3,25.1c0,7.1-4.5,12.8-11.2,12.8s-4.5-.8-6.3-2.1c-.2-.2-.6,0-.6.3v.9c0,.4-.3.7-.7.7H2.9c-.4,0-.7-.3-.7-.7V4.1c0-.4.3-.7.7-.7h6.6c.4,0,.7.3.7.7h0v10.1c0,.3.4.5.6.3,1.8-1.4,4-2.2,6.3-2.2,6.3,0,11.2,5.7,11.2,12.8ZM20.4,25.1c0-3.1-1.9-5.7-5.1-5.7s-5.1,2.6-5.1,5.7,1.9,5.7,5.1,5.7,5.1-2.6,5.1-5.7Z"

export default class SandboxHeader extends HTMLElement {
  constructor() {
    super()

    const stylesheet = new CSSStyleSheet()

    stylesheet.insertRule(`
      :host {
        display: block;
      }
    `)

    stylesheet.insertRule(`
      .header {
        border-bottom: 0.25rem solid ${tealDark};
        margin-bottom: 1rem;
      }
    `)

    stylesheet.insertRule(`
      .home {
        display: block;
        text-decoration: none;

        .bitovi-logo {
          position: relative;
          height: 3.5em;
          margin-right: 0.5em;
          top: 0.25em;
        }

        span {
          color: ${teal};
          font-family: ${title.family};
          font-weight: ${title.weight};
          font-size: ${title.size * 100}%;
          line-height: 1;
        }
      }
    `)

    this.root = this.attachShadow({ mode: "open" })
    this.root.adoptedStyleSheets.push(stylesheet)

    this.render()
  }

  render() {
    this.root.innerHTML = `
      <div class="header">
        <a href="/" class="home">
          <svg
            class="bitovi-logo"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 120 40"
          >
            <path d="${logoPath}" fill="${orange}" />
          </svg>
          <span>PWA Sandbox</span>
        </a>
      </div>
    `
  }
}

window.customElements.define("sandbox-header", SandboxHeader)
