
import './login.css'
import libr from '../../assets/images/libr.jpg';

const Login = () => {


  return (
    <div className='login'>
      
      <form action="" class="form">

        <div class="form-inner">
          <h2>  Welcome! </h2>
          <h4>Please, sign in</h4>

          <div class="content">
            <input class="input" type="email" placeholder="Email" />
            <input class="input" type="password" placeholder="Password" />
            <button class="btn">Sign in</button>
          </div>
        </div>
      </form>
      <img src={libr} alt="" srcset="" />
    </div>
  )
}

export default Login