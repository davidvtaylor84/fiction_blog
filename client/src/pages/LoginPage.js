import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[redirect, setRedirect] = useState(false);
    const{setUserInfo} = useContext(UserContext);

    const handleUsernameChange = (e) =>{
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    async function handleLoginSubmit (e){
        e.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include', 
        });
        if(response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            })
    
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