import React from 'react'

import Css from './CssMoudules.css'
import Less from './CssMoudules.less'

console.log('CssMoudules Css', Css)
console.log('CssMoudules Less', Less)

function App() {

  return <div>

    <div>--------------------------------------------------</div>

    <div className={Css.css}>
      <p className={Css.title}>Css</p>
      <p className={Css.content}>class: content</p>
      <p id={Css.cssfoot}>id: cssfoot</p>
    </div>

    <div>--------------------------------------------------</div>

    <div className={Less.less}>
      <p className={Less.title}>Less</p>
      <p className={Less.content}>class: content</p>
      <p id={Less.lessfoot}>id: lessfoot</p>
    </div>

    <div>--------------------------------------------------</div>

  </div>
}

export default App