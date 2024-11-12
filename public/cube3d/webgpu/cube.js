/* global GPUBufferUsage */

// eslint-disable-next-line import/no-unresolved
import { mat4, vec3 } from "wgpu-matrix"

import initWasm, { Cube } from "../wasm-cube/wasm_cube.js"

import { loadShaderCode } from "./util.js"

const shaderFragmentCodePromise = loadShaderCode(
  import.meta.resolve("./shader-fragment.wgsl"),
)
const shaderVertexCodePromise = loadShaderCode(
  import.meta.resolve("./shader-vertex.wgsl"),
)

const vertextLength = 10
const positionOffset = 0
// const colorOffset = 4
const uvOffset = 8

// prettier-ignore
const vertexArray = new Float32Array([
  // float4 position, float4 color, float2 uv,
  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,
  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,
  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,
  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,
  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,
  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,

  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,
  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,
  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,
  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,
  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,
  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,

  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,
  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,
  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,
  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,
  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,
  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,

  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,
  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,
  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,
  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,

  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,
  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,
  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,
  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,
  1, -1, 1, 1,   1, 0, 1, 1,  0, 0,
  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,

  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,
  -1, -1, -1, 1, 0, 0, 0, 1,  1, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,
  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,
  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,
]);

export default async function createCube(device, renderer) {
  await initWasm()

  const shaderFragmentCode = await shaderFragmentCodePromise
  const shaderVertexCode = await shaderVertexCodePromise

  const cube = new Cube()

  function getViewMatrix(time) {
    cube.update(time)

    // console.log(cube.get_view_matrix())

    const position = vec3.fromValues(0, 0, -5)
    const rotation = vec3.fromValues(Math.sin(time), Math.cos(time), 0)

    const viewMatrix = mat4.identity()
    mat4.translate(viewMatrix, position, viewMatrix)
    mat4.rotate(viewMatrix, rotation, 1, viewMatrix)

    return viewMatrix
  }

  const pipeline = device.createRenderPipeline({
    layout: "auto",
    vertex: {
      module: device.createShaderModule({
        code: shaderVertexCode,
      }),
      buffers: [
        {
          arrayStride: vertextLength * 4,
          attributes: [
            {
              // position
              shaderLocation: 0,
              offset: positionOffset * 4,
              format: "float32x4",
            },
            {
              // uv
              shaderLocation: 1,
              offset: uvOffset * 4,
              format: "float32x2",
            },
          ],
        },
      ],
    },
    fragment: {
      module: device.createShaderModule({
        code: shaderFragmentCode,
      }),
      targets: [
        {
          format: renderer.config.format,
        },
      ],
    },

    depthStencil: {
      // Enable depth testing so that the fragment closest to the camera is rendered in front.
      depthWriteEnabled: true,
      depthCompare: "less",
      format: "depth24plus",
    },
    primitive: {
      // Backface culling since the cube is solid piece of geometry.
      cullMode: "back",
      topology: "triangle-list",
    },
  })

  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 0,
        resource: {
          buffer: renderer.uniformBuffer,
        },
      },
    ],
  })

  const verticesBuffer = device.createBuffer({
    size: vertexArray.byteLength,
    usage: GPUBufferUsage.VERTEX,
    mappedAtCreation: true,
  })
  new Float32Array(verticesBuffer.getMappedRange()).set(vertexArray)
  verticesBuffer.unmap()

  return {
    getViewMatrix,
    pipeline,
    bindGroup,
    verticesBuffer,
    vertexCount: vertexArray.length / vertextLength,
  }
}
