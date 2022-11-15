import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { TEMP_USERS } from '../../data/temp_data';
import './login.css'

const Login = () => {

  // const navigation = useNavigate();
  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const user = TEMP_USERS.find((user) => user.email === email && user.password === password);

  //   if (user) {
  //     navigation('./feed', { replace: true });
  //   } else {
  //     alert("I don't know you, Go Away")
  //   }

  // }

  return (
    <div className='login'>
      {/* <h2>Welcome Back, Vivian Social Network </h2>
      <form onSubmit={handleLogin}>
        <div className='input-group'>
          <label >Email</label>
          <input type="text" name='email' />
        </div>
        <div className='input-group'>
          <label >Password</label>
          <input type="password" name='password' />
        </div>
        <div className='action-group'>
          <button type="submit" className='Login'>Login</button>
        </div>
      </form> */}

    </div>
  )
}

export default Login