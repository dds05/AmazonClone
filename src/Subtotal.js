import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {useHistory} from 'react-router-dom';


function Subtotal() {
    
    const history=useHistory();

    const[state,dispatch]=useStateValue();

    const bask=state.basket;
    


   


    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                    Subtotal ({state.basket.length} items):
                    <strong>
                   {value}
                     
                
                    </strong>
                    </p>

                    <small className='subtotal__gift'>
                    <input type='checkbox'/>
                    This order contains a gift
                    </small>

                </>
            )}

            decimalScale={2}
            value= {bask.reduce((a,v)=>{
                return(
                a=a+v.price
                );
            },0)}
            
            
            
            
            displayType={'text'}
            thousandSeparator={true}
            prefix={"₹"}
            />
            
            <button onClick={(e)=>history.push('/payment')}>Proceed to Checkout</button>












            
        </div>
    );
}

export default Subtotal
