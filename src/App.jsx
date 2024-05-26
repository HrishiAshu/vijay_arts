import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../src/Auth/Login'
import Register from './Auth/Register'
import Header from '../src/Components/CommonComponents/Header/Header'

const App = () => {
  return (

    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/user/register' element={<Register />} />
      </Routes>

    </>

  )
}

export default App
