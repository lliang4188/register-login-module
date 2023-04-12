import React,{useState} from 'react'
import Axios from 'axios'
// import our assets
import video from '../../assets/LoginAssets/video.mp4'
import logo from '../../assets/LoginAssets/logo.png'
import { Link } from 'react-router-dom'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import {  AiOutlineSwapRight} from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'
import axios from 'axios'
const Register = () => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const createUser = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3002/register', {
      Email: email,
      UserName: username,
      Password: password
    }).then(()=>{
      console.log('User has been created')
    })  
  }
  return (
    <div className='registerPage flex'>
      <div className='container flex'>
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className='textDiv'>
            <h2 className='title'>Create And Shell Extraordinary Products</h2>
            <p>Adopt the peace of nature</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>have an account?</span>
            <Link to={'/'}>
              <button className='btn'>Login</button>
            </Link>
          </div>
        </div>
        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={ logo } alt='Logo Image'/>
            <h3>Let Us Know You!</h3>
          </div>

          <form action='' className='form grid'>
            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className='input flex'>
                 <MdMarkEmailRead className='icon' />
                 <input type='email' id='email' placeholder='Enter Email' onChange={(event)=>{
                  setEmail(event.target.value)
                 }}/>
              </div>
            </div>
            <div className='inputDiv'>
              <label htmlFor='username'>Username</label>
              <div className='input flex'>
                 <FaUserShield className='icon' />
                 <input type='text' id='username' placeholder='Enter Username' onChange={(event)=>{
                  setUsername(event.target.value)
                 }}/>
              </div>
            </div>
            <div className='inputDiv'>
              <label htmlFor='password'>Passwrod</label>
              <div className='input flex'>
                 <BsFillShieldLockFill className='icon' />
                 <input type='password' id='password' placeholder='Enter Passwrod'  onChange={(event)=>{
                  setPasswrod(event.target.value)
                 }}  />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={createUser}>
                <span>Register</span>
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

export default Register