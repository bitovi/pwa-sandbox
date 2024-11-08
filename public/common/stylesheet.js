import { base } from "./path.js"

export function addStylesheet(pathname, type = "relative") {
  const link = document.createElement("link")
  link.type = "text/css"
  link.rel = "stylesheet"

  link.href =
    {
      relative: pathname,
      absolute: `${base}/${pathname}`,
      module: `${base}/node_modules/${pathname}`,
    }[type] || pathname

  document.head.appendChild(link)
}
