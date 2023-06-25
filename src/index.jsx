import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import './index.css'

const container = document.body.appendChild(document.createElement('div'))
createRoot(container).render(<App />)
