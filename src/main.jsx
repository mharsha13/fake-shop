import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router/Router.jsx'
import GlobalStyles from './styles/GlobalStyles.js'
import Theme from './styles/Theme.js'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
)
