import React from 'react'
import { Link } from 'react-router-dom';

function Navbar({ title }: any) {
  return (
    <div className='top_navbar'>
      <h1>{ title }</h1>
      <ul className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/anime'>Anime</Link>
        <Link to='/search'>Search</Link>
      </ul>
    </div>
  )
}

export default Navbar;