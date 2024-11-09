import "../common/sandbox-header.js"

import { base } from "../common/path.js"

const startEl = document.getElementById("start")
startEl.addEventListener("click", ({ target }) => {
  if ("Notification" in window) {
    if (Notification.permission === "default") {
      Notification.requestPermission()
    }
  }

  if (target.tagName !== "BUTTON") return

  const duration = parseInt(target.getAttribute("data-duration"))
  if (!duration) return

  startTimer(duration)
})

let timer = undefined
const runningEl = document.getElementById("running")
const remainingEl = document.getElementById("remaining")

const pauseEl = document.getElementById("pause")
pauseEl.addEventListener("click", () => pauseTimer())

const resumeEl = document.getElementById("resume")
resumeEl.addEventListener("click", () => resumeTimer())

const finishedEl = document.getElementById("finished")

const resetEl = document.getElementById("reset")
resetEl.addEventListener("click", () => reset())

function startTimer(duration) {
  timer = {
    previous: 0,
    start: Date.now(),
    duration: duration * 1000,
    id: setInterval(() => {
      const remaining = updateTimer()
      if (remaining > 0) return

      finishTimer()
    }, 100),
  }

  updateTimer()

  startEl.classList.add("hide")
  runningEl.classList.remove("hide")
  finishedEl.classList.add("hide")
}

function finishTimer() {
  startEl.classList.add("hide")
  runningEl.classList.add("hide")
  finishedEl.classList.remove("hide")

  clearInterval(timer.id)
  timer = undefined

  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      new Notification("Timer Complete!", {
        body: "Your Pomodoro timer has completed!",
        icon: `${base}/icons/icon-light-288.png`,
      })
    }
  }
}

function reset() {
  startEl.classList.remove("hide")
  runningEl.classList.add("hide")
  finishedEl.classList.add("hide")
}

function pauseTimer() {
  const elapsed = Date.now() - timer.start
  timer.previous += elapsed

  timer.start = undefined
}

function resumeTimer() {
  timer.start = Date.now()
}

function updateTimer() {
  const { previous, start, duration } = timer
  const elapsed =
    previous + (typeof start === "number" ? Date.now() - start : 0)
  const remaining = duration - elapsed

  remainingEl.innerText = durationToString(remaining / 1000)

  return remaining
}

function durationToString(duration) {
  const sign = duration < 0 ? "-" : ""
  duration = duration < 0 ? 1 - duration : duration

  const minutes = Math.floor(duration / 60)
  const seconds = Math.floor(duration - minutes * 60)

  return `${sign}${minutes}:${leftpad(`${seconds}`, 2, "0")}`
}

function leftpad(input, length, pad = " ") {
  while (input.length < length) {
    input = `${pad}${input}`
  }

  return input
}
