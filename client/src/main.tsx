import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Home/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
    {/* <App /> */}
  </React.StrictMode>
)
