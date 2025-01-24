import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ModalProvider } from './components/providers/modal-provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ModalProvider />
  </StrictMode>,
)
