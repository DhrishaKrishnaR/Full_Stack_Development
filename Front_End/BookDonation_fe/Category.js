import  Link  from '@mui/material/Link'
import React from 'react'
import'./Category.css'
function Category() {
    return (
        <div className='body8'>
        <div className="cat">
        <h3>CHOOSE YOUR CATEGORY</h3>
        <Link href="/Donation"><button class='book'> FICTION</button></Link>
        <br/><br/><br/>
        <Link href="/Donation2"><button class='book' >NON FICTION</button></Link>
        </div>
    
    </div>
  )
}

export default Category