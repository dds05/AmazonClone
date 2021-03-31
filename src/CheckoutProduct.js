import React, { useState } from 'react'
import Alert from './Alert';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'





function CheckoutProduct({id,image,title,price,rating,hideButton}) {

    const[{basket},dispatch]=useStateValue();
    const[alert,setAlert]=useState({show:false,msg:''});

    
    const showAlert=(show=false,msg='')=>{
        setAlert({show,msg});
    }

    

    const removeFromBasket=()=>{

        showAlert(true,'remove');
        
       dispatch({
         type: 'REMOVE_FROM_BASKET',
         id:id,
         
        
       }) 

    }
    
    
    return (
        <>
        <div className='alertbox'>
            
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        </div>
        <div  className='checkoutProduct'>
           

            <img className='checkoutProduct__image' src={image}/>

            <div className='checkoutProduct__info'>
                <p className='checkoutPRoduct__title'>{title}</p>

                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>   
                </p>

                <div className='checkoutProduct__rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton && (<button onClick={removeFromBasket}>Remove from Basket</button>
                )}
                

            </div>




            
        </div>
        </>
    )
}

export default CheckoutProduct
 