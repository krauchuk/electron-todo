import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const container = document.body.appendChild(document.createElement('div'))
createRoot(container).render(<App />)
