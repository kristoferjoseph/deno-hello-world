import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.60/index.js'
import { Clock } from './http/get-index/clock.tsx'

window.addEventListener("DOMContentLoaded", function(event) {
  let el = window.document.getElementById('root')
  ReactDOM.hydrate(<Clock />, el)
})
