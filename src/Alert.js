import React, { useEffect } from 'react'
import './Alert.css';
function Alert({removeAlert,msg}) {
    useEffect(()=>{
        const timeout=setTimeout(()=>{

                removeAlert();
        },3000);

    },[]);

   

        if(msg=='added')
        {
            return <p className='alertadded'>
            item added to the basket</p>
        }
        else{

            return  <p className='alertremoved'>
            item removed from the basket</p>

        }

    
}

export default Alert
