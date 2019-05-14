import { h } from 'hyperapp'
import L from 'leaflet'

function map () {
  const mymap = L.map('mapid').setView([51.505, -0.09], 13)

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFyY29rb3V5YXRlIiwiYSI6ImNqdm03a2pwZjE1dmU0YW56ZDUzajk2MnYifQ.3O1W4gWqSpo2e9YA3Kr5zA'
  }).addTo(mymap)
  const marker = L.marker([51.5, -0.09]).addTo(mymap)
  const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap)
  marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup()
  circle.bindPopup('I am just a circle')
}

export default() =>
  h('div', {
    id: 'mapid',
    oncreate: () => map()
  }, '')
