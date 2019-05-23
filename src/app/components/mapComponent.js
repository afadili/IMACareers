import { h } from 'hyperapp'
import L from 'leaflet'

function map (props) {
  const mymap = L.map('mapid', { zoomControl: false, scrollWheelZoom: false }).setView([51.505, -0.09], 13).setZoom(2)

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFyY29rb3V5YXRlIiwiYSI6ImNqdm03a2pwZjE1dmU0YW56ZDUzajk2MnYifQ.3O1W4gWqSpo2e9YA3Kr5zA'
  }).addTo(mymap)

  props.map(country => L.marker(country.value).bindPopup(country.label).addTo(mymap))

  const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap)
  circle.bindPopup('I am just a circle')
}

export default(props) => {
  const countries = props.countries
  return h('div', {
    id: 'mapid',
    oncreate: () => map(countries)
  }, '')
}
