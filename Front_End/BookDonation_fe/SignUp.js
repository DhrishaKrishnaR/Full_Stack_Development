import  Link  from '@mui/material/Link';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';

export default function SignUp() {
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[phno,setMobileNum]=useState('');
    const[emailid,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpassword,setConfirmPassword]=useState('');
    const[error,seterror]=useState(false);
    const navigate=useNavigate();
    const handleSubmit=(event)=>
    {
      event.preventDefault();
      if(firstname.length===0 || lastname.length===0 || phno.length<10 || phno.length>10 || emailid.length===0 ||  password.length!==0 || password!==confirmpassword)
      {
        seterror(true);
      }
      else
      {
        const data = { emailid,confirmpassword ,firstname,lastname, password, phno};
        axios.post('http://localhost:8080/postsignup', data)
        .then(() => {
          console.log(data);
          navigate("/category");
      });

    }
    if(firstname && lastname && phno && emailid  && password && confirmpassword)
    {   
          const loginobj={
            fname:firstname,
            lname:lastname,
            mob:phno,
            mail:emailid,
            pwd:password,
            cpwd:confirmpassword
          }
          console.log(loginobj);
          alert(JSON.stringify(loginobj));
        }
        
      }
  return (
    <div className='body4'>
    <div className='login-form1'>
    <h4><form onSubmit={handleSubmit}>
    <h3>CREATE ACCOUNT</h3><br/>
    FIRST NAME : <input type="text" value={firstname} placeholder="FIRST NAME" onChange={e=>setFirstName(e.target.value)}/><br/>
    <div>
    {error && firstname.length===0?
      <label style={{color:'red'}}>Firstname is required</label>:""} 
    </div><br/>
    LAST NAME :<input type="text" value={lastname} placeholder="LAST NAME" onChange={e=>setLastName(e.target.value)}/><br/>
    <div>
    {error && lastname.length===0?
      <label style={{color:'red'}}>Lastname is required</label>:""} 
    </div><br/>
    MOBILE NUMBER:<input type="number" value={phno} placeholder="MOBILE NUMBER" onChange={e=>setMobileNum(e.target.value)}/><br/>
    <div>
    {error && phno.length<10?
      <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
    </div>
    <div>
    {error && phno.length>10?
      <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
    </div><br/>
    E-MAIL ID:<input type="text" value={emailid} placeholder="E-MAIL ID" onChange={e=>setEmail(e.target.value)}/><br/>
    <div>
    {error && emailid.length===0?
      <label style={{color:'red'}}>E-mail ID is required</label>:""} 
    </div><br/>
    PASSWORD:<input type="password" value={password} placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/><br/>
    <div>
    {error && password.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
    </div><br/>
    CONFIRM PASSWORD:<input type="password" value={confirmpassword} placeholder="CONFIRM PASSWORD" onChange={e=>setConfirmPassword(e.target.value)}/><br/>
    <div>
    {error && password!==confirmpassword?
      <label style={{color:'red'}}>Password Confirmation Failed</label>:""}
      <br/>
      <div className="button-container">
      <Link href="/Category"><button className="Submit3">SUBMIT</button></Link>
      </div>
    </div>
    </form> </h4>
    </div>
    </div>
  )
}