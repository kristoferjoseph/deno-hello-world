import React from 'https://dev.jspm.io/react'
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server'
import { Clock } from '../../components/clock.tsx'

export default function render() {
  let body = ReactDOMServer.renderToString(<Clock/>)
  return `<!doctype html>
<html>
<body>
<main id=root>${body}</main>
<script type=module src=/_static/browser.js></script>
</body>
</html>`
}
