export function createDialog() {
  if (typeof document === "undefined") {
    // Not implemented in workers.
    return {
      show(msg) {
        console.error(msg)
      },
    }
  }

  const dialogBox = document.createElement("dialog")
  dialogBox.close()
  document.body.append(dialogBox)

  const dialogText = document.createElement("pre")
  dialogText.style.whiteSpace = "pre-wrap"
  dialogBox.append(dialogText)

  const closeBtn = document.createElement("button")
  closeBtn.textContent = "OK"
  closeBtn.onclick = () => dialogBox.close()
  dialogBox.append(closeBtn)

  return {
    show(msg) {
      // Don't overwrite the dialog message while it's still open
      // (show the first error, not the most recent error).
      if (!dialogBox.open) {
        dialogText.textContent = msg
        dialogBox.showModal()
      }
    },
  }
}

const failOutput = createDialog()
export function fail(message) {
  failOutput.show(message)
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
