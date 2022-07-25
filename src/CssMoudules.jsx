import React from 'react'

import Css from './CssMoudules.css'

console.log('CssMoudules', Css)

function App() {

  return <div>

    <div className={Css.css}>
      <p className={Css.title}>Css</p>
      <p className={Css.content}>class: content</p>
      <p id={Css.cssfoot}>id: cssfoot</p>
    </div>

  </div>
}

export default App