import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { Provider } from './context/recipes'
import './scss/style.scss' // Import Bootstrap CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Provider>
      <App />
    </Provider>
  </HashRouter>
)
