import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import { parsePath } from './site'

const root = document.getElementById('root')!
const { lang, id } = parsePath(window.location.pathname)
const app = (
  <StrictMode>
    <App initialLang={lang} initialId={id} />
  </StrictMode>
)

if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
