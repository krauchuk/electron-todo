import React from 'react'
import { createRoot } from 'react-dom/client'

import Desk from './components/Desk'
import Provider from './store/Provider'
import './global.css'

const container = document.body.appendChild(document.createElement('div'))
createRoot(container).render(
  <Provider>
    <Desk />
  </Provider>,
)
