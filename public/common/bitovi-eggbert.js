import { teal, white } from "./theme/index.js"

export const paths = {
  light:
    "M237.3,107c-3.2-3.2-6.4-4.9-9.1-6.5-2.1-1.2-3.9-2.2-5.6-3.8-2-1.8-4.5-6.7-5.6-9.6h0c-6.1-17.9-14.6-34.3-25-47.8C173.3,15,150.7,2.1,126.6,1.9h-.5c-26,0-50.8,15.3-69.8,43.2-6.6,9.6-12.7,23.1-17.2,32.9-1,2.3-2,4.3-2.7,6-1.1,2.4-2.3,4.4-3.6,6.3l-7.8-69.7c3.7-1.6,6.2-4.9,6-8.7-.3-5-5.3-8.7-11.2-8.4-5.9.3-10.5,4.6-10.2,9.6.2,3.8,3.2,6.9,7.3,8l3,80.7-.4.3c-3.6,2.2-7.3,4.4-10,7-3.6,3.4-6.2,8.6-7.6,14.9-3.3,15.2-1.3,39.4,11.2,45.4,9.4,4.5,16.6,12.5,20.9,23.1,15.5,40.8,50.1,65.3,92.5,65.5h.5c29.1,0,55.1-11.7,73.4-33,13.1-15.4,21.6-35,25.1-56.8.8-3.7,4.6-7.5,8.2-11.3,4.1-4.2,8.3-8.5,10-14,1.9-6.2.8-28.6-6.5-35.8h.1ZM212.3,164c-1.3,9.4-3.5,17.7-6.3,24.4-.6,1.5-1.5,2.8-2.7,3.9-3.2,3.1-7,6.1-11.5,8.6-16,9.1-37.3,14.1-57.8,14.3,27.6,2.7,50.1-3.2,62-7.6-1.9,2.8-3.9,5.6-6.1,8.1-15.7,18.4-37.4,28.2-62.7,28.2h-.5c-36.5-.2-66.2-21.4-79.6-56.7,0-.1,0-.2,0-.3-3.6-8.8-8.8-16.2-15.4-22,0,0,0-.1-.1-.2-3.4-3.3-2.3-8.1-2.1-10.1,1.6-14.8-2.5-26.5-3.7-28.9-1.4-2.8-2.7-1.6-2.4,0,.3,1.9.7,4.6.9,7.4.9,11.4-1.2,21.6-3.8,23.4-.3.2-.7.3-1,.2h-.1c-3-1.5-6.6-16.2-3.6-29.8,1.1-5,2.9-7.2,3.6-7.9,1.5-1.5,4.6-3.3,7.5-5.1l.9-.5c7.2-4.4,12.4-9,16.6-15-3.4,26-.7,56.9,16.9,80.5-7.6-13.2-11.8-29.5-12-47.9-.4-40.9,20.5-52.8,43.2-59.6,25.8-7.7,64.5-9.6,88.2-4.3,4.2.9,7.8,2.1,10.9,3.4,2.8,1.2,5,3.3,6.3,6.1,1.1,2.4,2.3,5.3,3.6,8.6.4,1,.3,1.2-.4.3-.4-.6-1-1.2-1.6-1.8-3-3-9-7.2-20.4-9.7-22.7-5.1-59.8-3.2-84.7,4.2-19.5,5.8-38.6,14.7-38.2,52.8.4,37,17.9,64.5,47,73.4,25.8,7.9,61.7,4,85.4-9.4,15.8-9,21.6-23.8,23.5-31,.1-.4.6-1.3.4.2h0v-.2ZM230.5,138.7c-.4,1.3-1.6,3-3.2,4.7-.1-7.7-.8-15.6-2.1-23.6-.3-1.8-.6-3.7-1-5.5,1.1.7,2.2,1.5,3.3,2.6,1.9,2.6,4.2,17.2,3,21.8ZM167.7,163.2c.6.8.7,1.8.4,2.8-.2.6-6.3,15.7-24.5,16.6h-1.2c-14.5,0-22.9-12.4-23.2-13-.6-.9-.6-2-.2-2.9.5-.9,1.4-1.5,2.4-1.6l43.8-3.1c1,0,2,.4,2.5,1.2h0ZM102.8,117.8l.9,18.1c.2,4.5-3.2,8.3-7.6,8.5-4.5.3-8.4-3.2-8.6-7.7l-.9-18.1c-.2-4.5,3.2-8.3,7.7-8.5s8.3,3.2,8.5,7.7h0ZM182,105.7c4.5-.2,8.3,3.2,8.5,7.7l1,17.5c.3,4.5-3.2,8.3-7.7,8.6s-8.3-3.2-8.6-7.7l-1-17.5c-.3-4.5,3.2-8.4,7.7-8.6h.1Z",
  dark: "M165.1,162l-43.8,3.1c-1,0-1.9.7-2.4,1.6-.5.9-.4,2,.2,2.9.4.5,8.7,13,23.3,13s.8,0,1.2,0c18.2-.8,24.2-15.9,24.5-16.6.4-.9.2-2-.4-2.8-.6-.8-1.5-1.2-2.5-1.2h0ZM94.3,110.1c-4.5.2-8,4-7.7,8.5l.9,18.1c.2,4.5,4.1,8,8.6,7.7s7.9-4.1,7.7-8.5l-.9-18.1c-.2-4.5-4-8-8.5-7.7h0ZM174.3,114.3l1,17.5c.3,4.5,4.1,7.9,8.6,7.7,4.5-.3,7.9-4.1,7.7-8.6l-1-17.5c-.3-4.5-4.1-7.9-8.5-7.7-4.5.2-8,4.1-7.7,8.6,0,0-.1,0-.1,0ZM237.3,107c-3.2-3.2-6.4-5-9.1-6.5-2.1-1.2-3.9-2.2-5.6-3.8-2-1.8-4.5-6.7-5.6-9.6h0c-6.1-17.9-14.7-34.3-25-47.8C173.3,15,150.7,2.1,126.6,1.9h-.5c-26,0-50.8,15.3-69.8,43.2-6.6,9.6-12.7,23.1-17.2,32.9-1,2.3-2,4.3-2.7,6-1.1,2.3-2.3,4.4-3.6,6.3l-7.8-69.7c3.7-1.6,6.2-4.9,6-8.7-.3-5-5.3-8.7-11.2-8.4-5.9.3-10.5,4.6-10.2,9.6.2,3.8,3.2,6.9,7.3,8l3,80.7-.4.3c-3.6,2.2-7.3,4.4-10,7-3.6,3.4-6.2,8.6-7.6,14.9-3.3,15.2-1.3,39.4,11.2,45.4,9.4,4.5,16.6,12.5,20.9,23.1,15.5,40.8,50.1,65.3,92.5,65.5h.5c29.1,0,55.2-11.7,73.4-33,13.1-15.4,21.7-35,25.1-56.8.8-3.7,4.6-7.5,8.2-11.3,4.1-4.2,8.3-8.5,10-14,1.9-6.2.8-28.6-6.5-35.8h.1ZM202,87.1c4.3,11.4,7.5,23.3,9.4,35,2.2,13.8,2.5,27.3,1,39.9-1.4,6.2-6.7,23-24,32.8-23.6,13.4-59.5,17.3-85.4,9.4-29.1-8.9-46.7-36.4-47-73.4-.4-38.1,18.7-47,38.2-52.8,24.8-7.4,62-9.3,84.7-4.2,11.4,2.5,17.4,6.7,20.4,9.7,1.4,1.4,2.2,2.6,2.8,3.6h0ZM189.9,215.8c-15.7,18.4-37.4,28.2-62.7,28.2h-.5c-36.5-.2-66.2-21.4-79.6-56.7v-.3c-3.6-8.8-8.8-16.2-15.4-22v-.2c-3.4-3.3-2.3-8.1-2.1-10.1,1.7-14.8-2.5-26.5-3.7-28.9-1.4-2.8-2.7-1.6-2.4,0,.3,1.9.7,4.6.9,7.4.9,11.4-1.2,21.6-3.8,23.4-.3.2-.7.3-1,.2h-.1c-3-1.5-6.6-16.2-3.6-29.8,1.1-5,2.9-7.2,3.6-7.8,1.5-1.5,4.6-3.3,7.5-5.1l.9-.5c10.2-6.2,16.4-13,21.4-23.5.8-1.7,1.8-3.8,2.8-6.2,4-8.8,10.1-22.1,16-30.7,16.4-23.9,37.1-37.1,58.3-37.1h.4c29.5.2,53.9,24.9,69.3,56.6-3.9-2.1-8.9-4-15.3-5.5-23.7-5.3-62.4-3.4-88.2,4.3-22.7,6.8-43.6,18.7-43.2,59.6.4,40.2,19.8,70.2,51.9,80,9.5,2.9,20.3,4.3,31.5,4.3,21,0,43-5,59.4-14.3,5.4-3,9.7-6.6,13.2-10.4-3.8,9.4-8.9,17.9-15.2,25.3h0v-.2h-.3ZM230.5,138.7c-.4,1.3-1.6,3-3.2,4.7-.1-7.7-.8-15.6-2.1-23.6-.3-1.8-.6-3.7-1-5.5,1.1.7,2.2,1.5,3.3,2.6,1.9,2.6,4.3,17.2,3,21.8h0Z",
}

export const colors = {
  teal: {
    color: teal,
    path: paths.dark,
  },
  white: {
    color: white,
    path: paths.light,
  },
}

export default class BitoviEggbert extends HTMLElement {
  constructor() {
    super()

    const stylesheet = new CSSStyleSheet()

    stylesheet.insertRule(`
      :host {
        display: block;
        aspect-ratio: 245 / 260;
      }
    `)

    stylesheet.insertRule(`
      svg {
        display: block;
      }
    `)

    this.root = this.attachShadow({ mode: "open" })
    this.root.adoptedStyleSheets.push(stylesheet)

    this.render()
  }

  render() {
    const { color, path } = colors[this.color || "teal"]

    this.root.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 245 260"
      >
        <path d="${path}" fill="${color}" />
      </svg>
    `
  }
}

window.customElements.define("bitovi-eggbert", BitoviEggbert)
