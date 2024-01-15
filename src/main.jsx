import React from 'react'
import ReactDOM from 'react-dom/client'

// App
import CoffeeListingApp from './CoffeeListingApp'

// Styles
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoffeeListingApp />
  </React.StrictMode>,
)
