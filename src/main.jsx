import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import SavedGamesProvider from './features/games/context/SavedGamesContext'
import { store } from './store'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SavedGamesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SavedGamesProvider>
    </Provider>
  </React.StrictMode>,
)
