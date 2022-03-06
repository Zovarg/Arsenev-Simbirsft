import React from 'react'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import Navibar from './components/UI/Navbar/Navbar'
import AppRouter from './components/AppRouter'
function App () {
  return (
    <BrowserRouter>
        <Navibar/>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App
