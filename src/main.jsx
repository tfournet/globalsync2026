import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PresentationApp from './PresentationApp.jsx'
import PrintDeck from './PrintDeck.jsx'
import AlternativesGallery, { AlternativesPrint } from './AlternativesDeck.jsx'
import PresenterView from './PresenterView.jsx'

const params = new URLSearchParams(window.location.search)
const isPrint = params.get('print') === '1'
const isAlt = params.get('alt') === '1'
const withNotes = params.get('notes') === '1'
const isPresenter = params.get('presenter') === '1'

let app = <PresentationApp />
if (isPresenter) app = <PresenterView />
else if (isAlt) app = isPrint ? <AlternativesPrint /> : <AlternativesGallery />
else if (isPrint) app = <PrintDeck withNotes={withNotes} />

createRoot(document.getElementById('root')).render(<StrictMode>{app}</StrictMode>)
