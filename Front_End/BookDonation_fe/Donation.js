import  Link  from '@mui/material/Link';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Donation.css';
import axios from 'axios';

export default function Donation() {
  const[id,setBookid]=useState('');
  const[author,setAuthor]=useState('');
  const[book_name,setBookName]=useState('');
  const[city,setCity]=useState('');
  const[donar_name,setDonarName]=useState('');
  const[donar_num,setDonarNum]=useState('');
  const[num_of_books,setNum]=useState('');
  const[error,seterror]=useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>
    {
        event.preventDefault();
        const data = { id,author ,book_name,city, donar_name, donar_num,num_of_books};
        if(id.length===0 || author.length===0 || book_name.length===0 || city.length===0 || donar_name.length===0 ||  donar_num.length>10 || num_of_books.length===0 )
        {
          seterror(true);
        }
        else
        {
          axios.post('http://localhost:8080/postf', data)
          .then(() => {
            console.log(data);
            navigate("/landing");
        });

        }
        if(id && author && book_name && city  && donar_name && donar_num && num_of_books)
        {

          const loginobj={
            id:id,
            author:author,
            book_name:book_name,
            city:city,
            donar_name:donar_name,
            donar_num:donar_num,
            num_of_books:num_of_books
          }
          console.log(loginobj);
          alert(JSON.stringify(loginobj));
          navigate("/Thanks");
        }
      }
  return (
    <div className='body5'>
    <div className='login-form2'>
    <h4><form onSubmit={formHandler}>
    <h2>DONATE YOUR BOOK</h2>
    <h3><u>CATEGORY : FICTION</u></h3><br/>
    Book ID :<input type="text" value={id} placeholder="ID" onChange={e=>setBookid(e.target.value)}/><br/>
    <div>
    {error && id.length===0?
      <label style={{color:'red'}}>BookID is required</label>:""} 
    </div><br/>
    AUTHOR: <input type="text" value={author} placeholder="AUTHOR" onChange={e=>setAuthor(e.target.value)}/><br/>
    <div>
    {error && author.length===0?
      <label style={{color:'red'}}>Author Name is required</label>:""} 
    </div><br/>
    BOOK NAME: <input type="text" value={book_name} placeholder="BOOK NAME" onChange={e=>setBookName(e.target.value)}/><br/>
    <div>
    {error && book_name.length===0?
      <label style={{color:'red'}}>Book Name is required</label>:""} 
    </div><br/>
    CITY: <input type="text" value={city} placeholder="CITY" onChange={e=>setCity(e.target.value)}/><br/>
    <div>
    {error && city.length===0?
        <label style={{color:'red'}}>City is required</label>:""} 
        </div><br/>
    DONAR NAME: <input type="text" value={donar_name} placeholder="NAME" onChange={e=>setDonarName(e.target.value)}/><br/>
        <div>
        {error && donar_name.length===0?
          <label style={{color:'red'}}>Donar Name is required</label>:""} 
        </div><br/>
    DONAR NUMBER:<input type="number" value={donar_num} placeholder="MOBILE NUMBER" onChange={e=>setDonarNum(e.target.value)}/><br/>
    <div>
    {error && donar_num.length<10?
      <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
    </div>
    <br/>
    NUMBER OF BOOKS:<input type="number" value={num_of_books} placeholder="NUMBER OF BOOKS" onChange={e=>setNum(e.target.value)}/><br/>
    <div>
    {error && num_of_books.length<1?
      <label style={{color:'red'}}>Please specify the number of books</label>:""} 
    </div>
      <br/>
      <div className="button-container">
      <Link href="/Landing"><button className="Submit1">SUBMIT</button></Link>
      </div>
   
    </form></h4>
    </div>
    </div>
  )
}