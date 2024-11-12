import { quitIfWebGPUNotAvailable } from "./util.js"

export default async function initializeScene() {
  const canvas = document.getElementById("cube")
  const bounds = canvas.getBoundingClientRect()

  const devicePixelRatio = window.devicePixelRatio
  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight - bounds.top + 8

  const adapter = await navigator.gpu?.requestAdapter()
  const device = await adapter?.requestDevice()
  quitIfWebGPUNotAvailable(adapter, device)

  const presentationFormat = navigator.gpu.getPreferredCanvasFormat()
  const context = canvas.getContext("webgpu")
  context.configure({
    device,
    format: presentationFormat,
    alphaMode: "premultiplied",
  })

  return {
    device,
    context,
    config: {
      format: presentationFormat,
      density: devicePixelRatio,
      aspect: canvas.width / canvas.height,
      fov: (2 * Math.PI) / 5,
      width: canvas.width,
      height: canvas.height,
    },
  }
}
