import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/manrope'
import '@fontsource-variable/syne'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { notifyVisitSource } from './utils/visitSource'

const container = document.getElementById('root')
const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
)

// Hydrate only when the HTML was prerendered for this exact URL (404.html is served for any unknown path).
if (container.dataset.prerendered === window.location.pathname) {
    hydrateRoot(container, app)
} else {
    createRoot(container).render(app)
}

notifyVisitSource()
