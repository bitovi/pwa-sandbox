const btn = document.getElementById("share")

btn.addEventListener("click", async () => {
  try {
    await navigator.share({
      title: "Bitovi PWA Sandbox",
      text: "Explore the capapabilities of a PWA with Bitovi!",
      url: window.location.href,
    })
  } catch (error) {
    console.error(error)
    alert(error.message)
  }
})
