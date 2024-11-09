import "./bitovi-logo.js"

import { base } from "./path.js"
import { teal, tealDark, title } from "./theme/index.js"

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
        display: flex;
        border-bottom: 0.25rem solid ${tealDark};
        margin-bottom: 1rem;
      }
    `)

    stylesheet.insertRule(`
      .home {
        flex: 1 1 auto;
        text-decoration: none;

        bitovi-logo {
          position: relative;
          height: 1.85em;
          margin-right: 0.25em;
          top: 0.125em;
        }

        span {
          color: ${teal};
          font-family: ${title.family};
          font-weight: ${title.weight};
          font-size: 2em;
          line-height: 1;
        }
      }
    `)

    stylesheet.insertRule(`
      #share {
        flex: 0 0 auto;
        font-size: 1em;
      }
    `)

    this.root = this.attachShadow({ mode: "open" })
    this.root.adoptedStyleSheets.push(stylesheet)

    this.render()
  }

  get hasShare() {
    return !!this.shareTitle
  }

  get shareTitle() {
    return this.getAttribute("share-title")
  }

  get shareUrl() {
    return this.getAttribute("share-url") || window.location.href
  }

  render() {
    this.root.innerHTML = `
      <div class="header">
        <a href="${base}" class="home">
          <bitovi-logo></bitovi-logo>
          <span>PWA Sandbox</span>
        </a>
        ${this.hasShare ? `<button id="share">Share</button>` : ""}
      </div>
    `

    const shareButton = this.root.getElementById("share")
    if (shareButton) {
      shareButton.addEventListener("click", async () => {
        try {
          await navigator.share({
            title: this.shareTitle,
            url: this.shareUrl,
          })
        } catch (error) {
          console.error(error)
          alert(error.message)
        }
      })
    }
  }
}

window.customElements.define("sandbox-header", SandboxHeader)
