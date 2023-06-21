import  Link from '@mui/material/Link';
import { useNavigate} from 'react-router-dom';
import React,{useState} from 'react';
import './Login.css';
import axios from 'axios';
export default function Login() {
  const[user,setEmail]=useState('');
  const[pwd,setPassword]=useState('');
  const[error,seterror]=useState(false);
  const navigate=useNavigate('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { user, pwd };
    
    if(user.length===0 && pwd.length===0)
    {
      seterror(true);
    }
    else
    {
      axios.post('http://localhost:8080/postlogin', data)
        .then(() => {
          console.log(data);
          navigate("/category");
        })
        .catch((error) => {
          console.log(error);
        });

    }
        if(user && pwd)
        {
          
          const loginobj={
            user:user,
            pwd:pwd
          }
          //console.log(loginobj);
          alert(JSON.stringify(loginobj));
        }

  };
  const handleFirstButtonClick = () => {
    navigate('/signup');
  };
  
  return (
    <div className='body12'>
    <div className="login-form5">
    <form  onSubmit={handleSubmit} className='img'>
    <br/><br/><br/><br/><br/><h1>LOGIN</h1>
    <div className="input_container">
    <label>EMAIL-ID: </label>
    <input type="email1" value={user} placeholder="EMAIL-ID" onChange={e=>setEmail(e.target.value)}/><br/><br/>
    <div>
    {error && user.length===0?
      <label style={{color:'red'}}>Email-Id is required</label>:""} 
    </div>
    </div>
    <div className="input_container">
    <label>PASSWORD: </label>
    <input type="password" value={pwd} placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/><br/>
    <div>
    {error && pwd.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
    </div>
    </div>
    <br/>
    <div className="button-container">
    <Link href="/Category"><button  type="submit" className="Submit" >SUBMIT</button></Link>
    </div>
    <h4>DON'T HAVE AN ACCOUNT?</h4>
    <Link href="/SignUp"><button type="submit" className="login" onClick={handleFirstButtonClick}>SIGNUP</button></Link>
    </form>
    </div>
    </div>
  )
}

