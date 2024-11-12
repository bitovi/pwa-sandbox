export function fail(message) {
  alert(message)
  throw new Error(message)
}

export function quitIfWebGPUNotAvailable(adapter, device) {
  if (!device) {
    if (!("gpu" in navigator)) {
      fail("WebGPU not available in this browser")
    }

    if (!adapter) {
      fail("gpu.requestAdapter() returned null")
    }

    fail("adapter.requestDevice() returned null")
    return
  }

  device.lost.then((reason) => {
    fail(`Device lost ("${reason.reason}"):\n${reason.message}`)
  })

  device.onuncapturederror = (ev) => {
    fail(`Uncaptured error:\n${ev.error.message}`)
  }
}

export async function loadShaderCode(filename) {
  const response = await fetch(filename)

  const code = await response.text()

  return code
}
