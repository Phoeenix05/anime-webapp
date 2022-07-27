import React from 'react'
import { Link } from 'react-router-dom';
import '../css/navbar.css'

function Navbar({ title }: any) {
  return (
    <div className='top_navbar'>
      <h1 className='title'>{ title }</h1>
      <ul className='items'>
        <Link to='/'>Home</Link>
        <Link to='/anime'>Anime</Link>
        <Link to='/search'>Search</Link>
      </ul>
    </div>
  )
}

export default Navbar;