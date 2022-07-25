import React from 'react'

import Less from './LessMoudules.less'

console.log('LessMoudules', Less)

function App() {

  return <div>

    <div className={Less.less}>
      <p className={Less.title}>Less</p>
      <p className={Less.content}>class: content</p>
      <p id={Less.lessfoot}>id: lessfoot</p>
    </div>

  </div>
}

export default App