import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppStore from './Store/AppStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider value={AppStore}>
        <App />
    </Provider>
)
