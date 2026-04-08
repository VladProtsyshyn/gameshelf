import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import SavedGamesProvider from './features/games/context/SavedGamesContext'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SavedGamesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SavedGamesProvider>
  </React.StrictMode>,
)
