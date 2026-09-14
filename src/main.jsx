import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PresentationApp from './PresentationApp.jsx'
import PrintDeck from './PrintDeck.jsx'
import AlternativesGallery, { AlternativesPrint } from './AlternativesDeck.jsx'

const params = new URLSearchParams(window.location.search)
const isPrint = params.get('print') === '1'
const isAlt = params.get('alt') === '1'

let app = <PresentationApp />
if (isAlt) app = isPrint ? <AlternativesPrint /> : <AlternativesGallery />
else if (isPrint) app = <PrintDeck />

createRoot(document.getElementById('root')).render(<StrictMode>{app}</StrictMode>)
