import React from 'react';
import './Home.css';
import { Link } from '@mui/material';


const Home = () => {
  return (
    <div className="bodyhome">
    <br/>
      <h2>WELCOME TO BOOKSHARE</h2>
      <h5>Donate your books and make a difference!</h5>
      <Link href="/Login"><button className="donate-button">Donate Now</button></Link>
      <p>Read and Revive....</p>
    </div>
  );
};

export default Home;
