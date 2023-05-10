import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/"><h1>the surfeit handle</h1></Link>
        <nav>
          <Link to="/login">Login</Link>
          {/* <a href="">Register</a> */}
        </nav>
    </header>
  )
}

export default Header