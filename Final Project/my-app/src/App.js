import React from 'react'
import {  Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Registration from './Pages/Registration'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import './index.css'
import Admin from './Pages/Admin'
export default function App() {
  return (
    <div id="a1">

      {/* NavBar */}
    <Navbar/>
    
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/Admin' element={<Admin/>} />
    </Routes>
    
  </div>
  )
}
