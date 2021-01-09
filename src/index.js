import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@babel/polyfill' // utilize polyfill
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
)
