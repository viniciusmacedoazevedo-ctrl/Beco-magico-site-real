import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/anton/latin.css'
import '@fontsource-variable/grenze-gotisch/index.css'
import '@fontsource-variable/manrope/index.css'
import '@fontsource-variable/fraunces/wght-italic.css'
import './styles/tokens.css'
import './styles/base.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
