import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PresentationApp from './PresentationApp.jsx'
import PrintDeck from './PrintDeck.jsx'

const isPrint = new URLSearchParams(window.location.search).get('print') === '1'

createRoot(document.getElementById('root')).render(
  <StrictMode>{isPrint ? <PrintDeck /> : <PresentationApp />}</StrictMode>,
)
