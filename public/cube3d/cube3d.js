import "../common/sandbox-header.js"

import createCube from "./webgpu/cube.js"
import createRenderer from "./webgpu/renderer.js"
import initializeScene from "./webgpu/scene.js"

const { device, context, config } = await initializeScene()
const renderer = await createRenderer(device, context, config)

const cube = await createCube(device, renderer)

function frame() {
  renderer.render(cube)

  requestAnimationFrame(frame)
}
requestAnimationFrame(frame)
