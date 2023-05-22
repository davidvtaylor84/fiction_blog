import React, { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Header = () => {

    const {setUserInfo, userInfo} = useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(res =>{
            res.json().then(userInfo =>{
               setUserInfo(userInfo);
            });
        })
    }, [])

    function logout(){
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null);
    }

    const username = userInfo?.username;

  return (
    <header>
        <Link to="/"><h1>the surfeit handle</h1></Link>
        <nav>
            {username && (
               <>
               <span>Hello, {username}!</span>
                <Link to='/create'>Create</Link>
                <a onClick={logout}>Logout</a>
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