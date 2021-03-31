import React from 'react'
import Footer from '../Footer'
import Product from '../Product'
import './pages.css'
function All() {
    return (
        <>
        <div className='start'> Mobiles</div>
        <div className='pagestart'>
           <Product 
            id="1000"
            title="New Apple iPhone 11 (128GB) - Green"
            price={59900.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71w3oJ7aWyL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="1001"
            title="Apple iPhone 7 (32GB) - Black"
            price={24994.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/41D9NDiSzjL._AC_UY327_FMwebp_QL65_.jpg"
          /> 

            
        </div>
        <div className='page'>
        <Product
            id="1002"
            title="New Apple iPhone 12 Pro (256GB) - Graphite"
            price={129900.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71YlH-4MUQL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="1003"
            title="Apple iPhone 11 Pro Max (256GB) - Midnight Green"
            price={939000.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="1004"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={29999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

            <Product
            id="1005"
            title="Samsung Galaxy Z Flip, 256GB (Purple)"
            price={64330.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Y1RR-AOCL._AC_UY327_FMwebp_QL65_.jpg"
           />
        </div>


        <div className='page'>

          <Product
            id="1006"
            title="Samsung Galaxy S21 Ultra 5G (Phantom Silver, 12GB, 256GB Storage) | Get Galaxy Active Watch 2 at Rs 990"
            price={105999.00}
            rating={4}
            image=" https://m.media-amazon.com/images/I/91dLTREdG1L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="1007"
            title="Samsung Galaxy M51 (Electric Blue, 8GB RAM, 128GB Storage)"
            price={24999.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/710weRkP-nL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <Footer/>
        </>        
    )
}

export default All
