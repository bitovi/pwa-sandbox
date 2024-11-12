/* global GPUBufferUsage, GPUTextureUsage */

// eslint-disable-next-line import/no-unresolved
import { mat4 } from "wgpu-matrix"

export default function createRenderer(device, context, config) {
  const uniformBuffer = device.createBuffer({
    size: 4 * 16, // 4x4 matrix
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  })

  const depthTexture = device.createTexture({
    size: [config.width, config.height],
    format: "depth24plus",
    usage: GPUTextureUsage.RENDER_ATTACHMENT,
  })

  const renderPassDescriptor = {
    colorAttachments: [
      {
        view: undefined, // Assigned later

        // clearValue: [0, 0, 0, 0],
        loadOp: "clear",
        storeOp: "store",
      },
    ],
    depthStencilAttachment: {
      view: depthTexture.createView(),

      depthClearValue: 1.0,
      depthLoadOp: "clear",
      depthStoreOp: "store",
    },
  }

  const projectionMatrix = mat4.perspective(config.fov, config.aspect, 1, 100.0)
  const modelViewProjectionMatrix = mat4.create()

  function render(mesh) {
    const time = Date.now() / 1000

    const viewMatrix = mesh.getViewMatrix(time)
    mat4.multiply(projectionMatrix, viewMatrix, modelViewProjectionMatrix)
    device.queue.writeBuffer(
      uniformBuffer,
      0,
      modelViewProjectionMatrix.buffer,
      modelViewProjectionMatrix.byteOffset,
      modelViewProjectionMatrix.byteLength,
    )

    renderPassDescriptor.colorAttachments[0].view = context
      .getCurrentTexture()
      .createView()

    const commandEncoder = device.createCommandEncoder()

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor)
    passEncoder.setPipeline(mesh.pipeline)
    passEncoder.setBindGroup(0, mesh.bindGroup)
    passEncoder.setVertexBuffer(0, mesh.verticesBuffer)
    passEncoder.draw(mesh.vertexCount)
    passEncoder.end()

    device.queue.submit([commandEncoder.finish()])
  }

  return {
    config,
    uniformBuffer,
    render,
  }
}
