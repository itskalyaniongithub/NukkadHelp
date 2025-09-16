import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GoogleOAuthProvider} from '@react-oauth/google'

const client_id = "674408376986-4prmh9le7bohabht546n41vdp7enqrjv.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId= {client_id}>
    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
