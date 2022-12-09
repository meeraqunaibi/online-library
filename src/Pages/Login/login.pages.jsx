
import { BookOpen } from 'phosphor-react'
import './login.css'

const Login = () => {


  return (
    <div className='login'>
      <h2>Welcome Back, to our online library</h2>


      <form action="" class="form">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="form-inner">
          <h2> <BookOpen size={30} color="#6e8ee8" weight="bold" />    LOGIN </h2>
          <div class="content">
            <input class="input" type="email" placeholder="Email" />
            <input class="input" type="password" placeholder="Password" />
            <button class="btn">LOGIN</button>
          </div>
        </div>
      </form>
      {/* <h2>Welcome Back, to our online library </h2>
      <form >
        <div className='input-group'> html><html lang="en">
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