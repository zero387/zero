import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemComponent from './ThemComponent.jsx'
import Form from './Form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Form></Form>
    <ThemComponent></ThemComponent>
  </React.StrictMode>,
)
