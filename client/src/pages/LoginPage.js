import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) =>{
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    const[redirect, setRedirect] = useState(false);

    async function handleLoginSubmit (e){
        e.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include', 
        });
        if(response.ok){
            setRedirect(true);
        } else {
            alert('Wrong credentials');
        }
    }

    if(redirect){
        return<Navigate to={'/'}/>
    } 
  return (
    <form className='login' onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        <input type="text" placeholder='username'value={username} onChange={handleUsernameChange}/>
        <input type="password" placeholder='the code'value={password} onChange={handlePasswordChange}/>
        <button>Submit</button>
    </form>
  )
}

export default LoginPage