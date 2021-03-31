import React from 'react'
import './Footer.css'


function Footer() {

   const handleScrollToStats = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
   }
    return (
    
    <div class='footer'>
            
            <button className='footer__btn' onClick={handleScrollToStats} >Back to top</button>

            <div className='container'> 
            
            <div className='col1'>
            <div className='heading'>Get to Know Us</div>
            <p>About us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Cares</p>
            <p>Gift a Smile</p>

            </div>

            <div className='col2'>
            <div className='heading'>Connect with us</div>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>

            </div>

            <div className='col3'>
            <div className='heading'>Sell on Amazon</div>
            <p>Sell under Amazon Accelerator</p>
            <p>Amazon Global Selling</p>
            <p>Become an Affiliate</p>
            <p>Fulfillment by Amazon</p>
            <p>Advertise your Products</p>
            <p>Amazon Pay on Merchants</p>
            <p>See More Make Money with Us</p>

            </div>

            <div className='col4'>
            <div className='heading'>Your Account</div>
            <p>Returns centre</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Amazon Assistant Download</p>
            <p>Help</p>


            </div>

            


            </div>



    </div>

    


   

    
        

    )
}

export default Footer
