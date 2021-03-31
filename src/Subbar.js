import React from 'react'
import './Subbar.css';
import {Link} from 'react-router-dom';
function Subbar() {
    return (
        <div className='subbar'>

            <Link style={{textDecoration:'none',color:'white'}} to='/all'>


            <div className='text'>All</div></Link>

            <Link style={{textDecoration:'none',color:'white'}} to='/bestsellers'>
           <div className='text'>BestSellers</div>
           </Link> 

           <Link style={{textDecoration:'none',color:'white'}} to='/mobiles'>
           <div className='text'>Mobiles</div>
           </Link>

           <Link style={{textDecoration:'none',color:'white'}} to='/todaysdeals'>
           <div className='text'>Today's Deals</div>
           </Link>

           <Link style={{textDecoration:'none',color:'white'}} to='/fashion'>
           <div className='text'>Fashion</div>
           </Link>

           <Link style={{textDecoration:'none',color:'white'}} to='/electronics'>
           <div className='text'>Electronics</div>
           </Link>

           <Link style={{textDecoration:'none',color:'white'}} to='/homeandkitchen'>
           <div className='text'>Home and Kitchen</div>
           </Link>

            
        </div>
    )
}

export default Subbar
