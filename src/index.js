import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import '@babel/polyfill' // utilize polyfill
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
