import React, { useEffect } from 'react'
import './Header.css'
import logo from './Download-removebg-preview.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import{useStateValue} from './StateProvider';
import {auth} from './firebase';

function Header() {
    const[{basket,user},dispatch]=useStateValue();

    





    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }

    }

    return (
        <div className='header'>
           <Link to='/'>
          <img  className='header__logo' 
           src={logo} alt='logo'/>
           </Link> 
        
        
        <div className='header__search'>
            <input className='header_searchInput' type="text"/>
            <SearchIcon className='header__searchIcon'/>
        </div>


        <div className='header__nav'>
            <Link style={{textDecoration:'none'}} to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLineone'>Hello {user?user.email:'Guest'} </span>
                    <span className='header__optionLinetwo'>
                    {user?'Sign Out':'Sign In'}  
                    </span>
                </div>
            </Link>


            <Link style={{textDecoration:'none'}} to='./orders'>

            <div className='header__option'>
                <span className='header__optionLineone'>Return</span>
                <span className='header__optionLinetwo'>&   Orders</span>
            </div>

            </Link>


          

            <div className='header__option'>
                <span className='header__optionLineone'>Your</span>
                <span className='header__optionLinetwo'>Prime</span>
            </div>

            <Link to='/checkout'>
            <div className='header__optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header__optionLinetwo header__basketCount'>{basket.length}</span>
            </div>            
            </Link>

        </div>
        
        </div>

    )
}

export default Header
