import React, { useState } from 'react'

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    async function handleRegisterSubmit(e){
        e.preventDefault();
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        })
    }

  return (
    <form className='login' onSubmit={handleRegisterSubmit}>
        <h2>Register</h2>
        <input type="text" 
            placeholder='username' 
            value={username} 
            onChange={handleUsernameChange}/>
        <input type="password" 
            placeholder='the code' 
            value={password} 
            onChange={handlePasswordChange}/>
        <button>Submit</button>
    </form>
  )
}

export default Register