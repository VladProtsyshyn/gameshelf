import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import SavedGamesProvider from './features/games/context/SavedGamesContext'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SavedGamesProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </SavedGamesProvider>
  </React.StrictMode>,
)
