import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import i18next from './i18n/i18next'

document.title = i18next.t('introduction.name')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)