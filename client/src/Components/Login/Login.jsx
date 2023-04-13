import React,{ useState, useEffect } from 'react'

// import our assets
import video from '../../assets/LoginAssets/video.mp4'
import logo from '../../assets/LoginAssets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setStatusHolder] = useState('message')
  const navigateTo = useNavigate()
 
  const loginUser = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3002/login', {
      UserName: username,
      Password: password
    }).then((res)=>{
      console.log(res)
      if (res.data.message || username === '' || password === '') {
        navigateTo('/')
        setLoginStatus("Credentials Don't Exist!" )
      } else {
        navigateTo('/dashboard')
      }
    })  
  }

  useEffect(() => {
    if(loginStatus !== '') {
      setStatusHolder('showMessage') 
      setTimeout(() => {
        setStatusHolder('message')
      }, 4000)
    }
  },[loginStatus])

  const cleanForm = () => {
    setUsername('')
    setPassword('')
  }

  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className='textDiv'>
            <h2 className='title'>Create And Shell Extraordinary Products</h2>
            <p>Adopt the peace of nature</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Don't have an account?</span>
            <Link to={'/register'}>
              <button className='btn'>Sing Up</button>
            </Link>
          </div>
        </div>
        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={ logo } alt='Logo Image'/>
            <h3>Welcome Back!</h3>
          </div>

          <form action='' className='form grid' onSubmit={cleanForm}>
            <span className={statusHolder}>{loginStatus}</span>
            <div className='inputDiv'>
              <label htmlFor='username'>Username</label>
              <div className='input flex'>
                 <FaUserShield className='icon' />
                 <input type='text' id='username' placeholder='Enter Username' onChange={(event)=>{
                  setUsername(event.target.value)
                 }}  />
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Passwrod</label>
              <div className='input flex'>
                 <BsFillShieldLockFill className='icon' />
                 <input type='password  ' id='password' placeholder='Enter Passwrod' onChange={(event)=>{
                  setPassword(event.target.value)
                 }} />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
                <span>Login</span>
                <AiOutlineSwapRight className='icon' />
            </button>
            <span className='forgotPassword'>
              Forgot your password? <a href=''>Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login