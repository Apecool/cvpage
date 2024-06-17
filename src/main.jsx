import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Generalinfo from './components/Generalinfo.jsx'
import Educationexp from './components/Educationexp.jsx'
import Practicalexp from './components/Practicalexp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Generalinfo />
    <Educationexp />
    <Practicalexp />
  </React.StrictMode>,
)
