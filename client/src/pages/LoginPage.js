import React from 'react'

const LoginPage = () => {
  return (
    <form className='login'>
        <h2>Login</h2>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='the code'/>
        <button>Submit</button>
    </form>
  )
}

export default LoginPage