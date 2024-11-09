import "../common/sandbox-header.js"

/* global google */

const map = await initMap()

const location = await getLocation()
if (location) {
  const { circle } = await initMarker(location)
  map.setCenter(location)
  map.fitBounds(circle.getBounds())
}

async function getLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({
          lat: coords.latitude,
          lng: coords.longitude,
          accuracy: coords.accuracy,
        })
      },
      (error) => {
        console.error(error)
        alert(`ERROR(${error.code}): ${error.message}`)
        resolve(undefined)
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    )
  })
}

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps")

  const map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 41.8781, lng: -87.6298 },
    mapId: "DEMO_MAP_ID",
  })

  return map
}

async function initMarker(position) {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")
  const marker = new AdvancedMarkerElement({
    map: map,
    position,
  })

  const { Circle } = await google.maps.importLibrary("maps")
  const circle = new Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    center: position,
    radius: position.accuracy,
  })

  return { marker, circle }
}
