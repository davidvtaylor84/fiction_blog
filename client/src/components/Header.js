import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [username, setUsername] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:3000/profile', {
            credentials: 'include',
        }).then(res =>{
            res.json().then(userInfo =>{
                setUsername(userInfo.username);
            });
        })
    }, [])

  return (
    <header>
        <Link to="/"><h1>the surfeit handle</h1></Link>
        <nav>
            {username && (
               <>
                <Link to='/create'>Create new post</Link>
                <a>Logout</a>
               </> 
            )}
            {!username && (
                <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    </header>
  )
}

export default Header