import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div id="a1" className="bg-image vw-100 bg-secondary  bg-position-center bg-size-cover">
      <div id="aa" className="container bg-custom box-shadow-custom d-flex align-items-center justify-content-between opacity-70">
        <h1>Yummy!</h1>
        <nav className='w-100 float-right'>
          <ul className="list-unstyled fs-5 text-decoration-none  d-flex justify-content-end w-100 mb-0">
          <li><Link className='mx-2 text-white text-decoration-none ' to='/'>Home</Link></li>
          <li><Link className='mx-2 text-white text-decoration-none ' to='/about'>About</Link></li>
          <li><Link className='mx-2 text-white text-decoration-none ' to='/menu'>Menu</Link></li>
          <li><Link className='mx-2 text-white text-decoration-none ' to='/registration'>Registration</Link></li>
          <li><Link className='mx-2 text-white text-decoration-none ' to='/admin'>Admin</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
