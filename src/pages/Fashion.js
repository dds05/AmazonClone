import React from 'react'
import Footer from '../Footer'
import Product from '../Product'
import './pages.css'
function All() {
    return (
        <>
        <div className='start'>Fashion</div>
        <div className='pagestart'>
           <Product 
            id="3000"
            title="Allen Solly Men's Polo"
            price={750.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/81Yqx-u2z4L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="3001"
            title="HUMBERT Men's Polo T Shirt"
            price={549.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/51R7rJC8dfL._AC_UL480_FMwebp_QL65_.jpg"
          /> 

            
        </div>
        <div className='page'>
        <Product
            id="3002"
            title="Max Women's Regular T-Shirt"
            price={349.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81tiO-LlCeL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="3003"
            title="ANNI DESIGNER Women's Cotton Straight Kurta with Palazzo Set (Green)"
            price={599.00}
            rating={4}
            image=" https://m.media-amazon.com/images/I/61vaSYjhHpL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="3004"
            title="MAD FOX Men Printed Casual Shirt"
            price={549.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81kuxoD0-3L._AC_UL480_FMwebp_QL65_.jpg
            "
          />

          <Product
            id="3005"
            title="Shiroi Men's Shorts (Sand)"
            price={1199.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/61KzLGNG7yL._AC_UL480_FMwebp_QL65_.jpg"
          />
          </div>

          <div className='page'>
          <Product
            id="3006"
            title="Max Boy's Regular Fit T-Shirt"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81bkSZu1PeL._AC_UL480_FMwebp_QL65_.jpg"
          />

          <Product
            id="3007"
            title="Max Boy's Regular Fit T-Shirt"
            price={199.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/81yq6WB73RL._AC_UL480_FMwebp_QL65_.jpg"
          />


          </div>
          <Footer/>
        </>        
    )
}

export default All
