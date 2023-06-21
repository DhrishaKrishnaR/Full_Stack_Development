import { Paper } from '@mui/material';
import './Landing.css';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';



export default function Landing() {

    const[id,setBookid]=useState('');
    const[author,setAuthor]=useState('');
    const[book_name,setBookName]=useState('');
    const[city,setCity]=useState('');
    const[donar_name,setDonarName]=useState('');
    const[donar_num,setDonarNum]=useState('');
    const[num_of_books,setNum]=useState('');
    const [detailsFetched, setDetailsFetched] = useState(false);
    const navigate=useNavigate('');
    const paperStyle={padding:'20px 20px', width:1300,margin:"20px auto"}
  const[LoginDetails,setLoginDetails]=useState([]);
  const[SignDetails,setSignDetails]=useState([]);
  const updatedb = (id) => {
    const details = {
      id,
      author,
      book_name,
      city,
      donar_name,
      donar_num,
      num_of_books,
    };
  
    // Update endpoint 1
    fetch(`http://localhost:8080/putf/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    })
      .then(() => {
        console.log('Detail updated for putf endpoint');
      })
      .catch((error) => {
        console.error('Error updating data for putf endpoint:', error);
      });

    // Clear form fields after updating details
    setBookid('');
    setAuthor('');
    setBookName('');
    setCity('');
    setDonarName('');
    setDonarNum('');
    setNum('');
  };
  const updatednb = (id) => {
    const details = {
      id,
      author,
      book_name,
      city,
      donar_name,
      donar_num,
      num_of_books,
    };
  
    // Update endpoint 2
    fetch(`http://localhost:8080/putnf/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    })
      .then(() => {
        console.log('Detail updated for putnf endpoint');
      })
      .catch((error) => {
        console.error('Error updating data for putnf endpoint:', error);
      });
  
    // Clear form fields after updating details
    setBookid('');
    setAuthor('');
    setBookName('');
    setCity('');
    setDonarName('');
    setDonarNum('');
    setNum('');
  };
  
  const deletesignup = async (id) => {
    try {
      await fetch(`http://localhost:8080/deletef?id=${id}`, {
        method: 'DELETE',
      });
      console.log('Deleted from deletef endpoint');
  
      
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }; 
  const deletesignupn = async (id) => {
    try {
      
  
      await fetch(`http://localhost:8080/deletenf?id=${id}`, {
        method: 'DELETE',
      });
      console.log('Deleted from deletenf endpoint');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }; 

  const updateState=(list)=>
  {
      setBookid(list.id)
      setAuthor(list.author)
      setBookName(list.book_name)
      setCity(list.city)
      setDonarName(list.donar_name)
      setDonarNum(list.donar_num)
      setNum(list.num_of_books)
      
      console.log(id,author,book_name,city,donar_name,donar_num,num_of_books)
  }
  const getalldetails = async () => {
    try {
      const response1 = await fetch('http://localhost:8080/getf');
      const data1 = await response1.json();
      setLoginDetails(data1);

      const response2 = await fetch('http://localhost:8080/getnf');
      const data2 = await response2.json();
      setSignDetails(data2);
      // Handle the data or update your component's state here
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }; 
    const handleViewDetailsClick = () => {
      getalldetails();
      setDetailsFetched(true);
    };
    
 
  const handlelandingButtonClick = () => {
    navigate('/category');
  };
  const handlesubmitButtonClick = () => {
    navigate('/thanks');
  };
  return (
    <div className="details">
      <button type="submit" className="bt0" onClick={handleViewDetailsClick}>
        View Details
      </button>
      
      {detailsFetched && (
        <>
      <div><br/>
      <Link href="/Category"></Link><button className="add" onClick={handlelandingButtonClick}>ADD DETAILS</button>
       </div><br/>
      <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Author</th>
          <th>Book Name</th>
          <th>City</th>
          <th>Donor Name</th>
          <th>Donor Number</th>
          <th>Number of Books</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {LoginDetails.map((post) => (
            
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.author}</td>
              <td>{post.book_name}</td>
              <td>{post.city}</td>
              <td>{post.donar_name}</td>
              <td>{post.donar_num}</td>
              <td>{post.num_of_books}</td>
              <td>
                <Popup
                  trigger={<button className="editbt" onClickCapture={()=>{updateState(post)}}>Edit</button>}
                  modal nested >
                  {(close) => (
                    <Paper className="model" elevation={15} style={paperStyle}>
                      <div className="modal">
                        <div className="content">
        <form>
        <p> Book ID :<input type="text" value={id} placeholder="ID" onChange={e=>setBookid(e.target.value)} required/></p>
        <p>AUTHOR: <input type="text" value={author} placeholder="AUTHOR" onChange={e=>setAuthor(e.target.value)} required/></p>
        <p>BOOK NAME: <input type="text" value={book_name} placeholder="BOOK NAME" onChange={e=>setBookName(e.target.value)} required/></p>
        <p>CITY: <input type="text" value={city} placeholder="CITY" onChange={e=>setCity(e.target.value)} required/></p>
        <p>DONAR NAME: <input type="text" value={donar_name} placeholder="DONAR NAME" onChange={e=>setDonarName(e.target.value)} required/></p>
        <p>DONAR NUMBER:<input type="number" value={donar_num} placeholder="MOBILE NUMBER" onChange={e=>setDonarNum(e.target.value)} required/></p>
        <p>NUMBER OF BOOKS:<input type="number" value={num_of_books} placeholder="NUMBER OF BOOKS" onChange={e=>setNum(e.target.value)} required/></p>
        
        </form>
 </div>
                        <div>
                          <center>
                            <button
                              className="updatebt"
                              onClick={() => {updatedb(post.id);close()}}
                            >
                              Update
                            </button>
                          </center>
                        </div>
                      </div>
                    </Paper>
                  )}
                </Popup>
                <button
                  className="delbt"
                  onClick={() => {
                    deletesignup(post.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      {SignDetails.map((post) => (
            
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.author}</td>
              <td>{post.book_name}</td>
              <td>{post.city}</td>
              <td>{post.donar_name}</td>
              <td>{post.donar_num}</td>
              <td>{post.num_of_books}</td>
              <td>
                <Popup
                  trigger={<button className="editbt" onClickCapture={()=>{updateState(post)}}>Edit</button>}
                  modal nested >
                  {(close) => (
                    <Paper className="model" elevation={15} style={paperStyle}>
                      <div className="modal">
                        <div className="content">
        <form>
        <p> Book ID :<input type="text" value={id} placeholder="ID" onChange={e=>setBookid(e.target.value)} required/></p>
        <p>AUTHOR: <input type="text" value={author} placeholder="AUTHOR" onChange={e=>setAuthor(e.target.value)} required/></p>
        <p>BOOK NAME: <input type="text" value={book_name} placeholder="BOOK NAME" onChange={e=>setBookName(e.target.value)} required/></p>
        <p>CITY: <input type="text" value={city} placeholder="CITY" onChange={e=>setCity(e.target.value)} required/></p>
        <p>DONAR NAME: <input type="text" value={donar_name} placeholder="DONAR NAME" onChange={e=>setDonarName(e.target.value)} required/></p>
        <p>DONAR NUMBER:<input type="number" value={donar_num} placeholder="MOBILE NUMBER" onChange={e=>setDonarNum(e.target.value)} required/></p>
        <p>NUMBER OF BOOKS:<input type="number" value={num_of_books} placeholder="NUMBER OF BOOKS" onChange={e=>setNum(e.target.value)} required/></p>
        
        </form>
 </div>
                        <div>
                          <center>
                            <button
                              className="updatebt"
                              onClick={() => {updatednb(post.id);close()}}
                            >
                              Update
                            </button>
                          </center>
                        </div>
                      </div>
                    </Paper>
                  )}
                </Popup>
                <button
                  className="delbt"
                  onClick={() => {
                    deletesignupn(post.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          </tbody>
          </table>
          <br/>
          <div className="centerdone" >
          <button className="add" onClick={handlesubmitButtonClick}>DONE</button>
        </div>
      </>
      )}
    </div>
  );
}