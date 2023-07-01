import React from 'react'

import Desk from './components/Desk'
import Provider from './store/Provider'

const App = () => {
  return (
    <Provider>
      <Desk />
    </Provider>
  )
}

export default App
