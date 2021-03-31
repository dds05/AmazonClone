import React, { useEffect, useState } from 'react'
import Alert from './Alert';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    
    const[{basket},dispatch]=useStateValue();

    const[alert,setAlert]=useState({show:false,msg:''});
   

    const showAlert=(show=false,msg='')=>{
        setAlert({show,msg});
    }

    const addToBasket=()=>{

            showAlert(true,'added');
        
        //dispatch the item into data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price: price,
                rating:rating,
            },
        })
        
    }
    
    
    
    
    return (
        <div className='product'>
            <p>{title}</p>
            <p className='product__price'>
             <small>₹</small>   
             <strong>{price}</strong>
            </p>

            <div className='product__rating'>
                {Array(rating).fill().map((_, i)=>{
                   return (
                   <p>⭐</p>
                   )
                })}
            
                    

                
          

            </div>

            <img src={image} alt=''/>

            <button onClick={addToBasket}>Add to basket</button>
            
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
           
            
        </div>
    )
}

export default Product
