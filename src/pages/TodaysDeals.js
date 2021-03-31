import React from 'react'
import Footer from '../Footer'
import Product from '../Product'
import './pages.css'
function All() {
    return (
        <>
        <div className='start'>Today's Deals</div>
        <div className='pagestart'>
           <Product 
            id="2000"
            title="Tecno Spark 5 Pro (Seabed Blue, 4GB RAM, 64GB Storage)"
            price={9299.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/41GzEXVzLLL._AA210_.jpg"
          />
          <Product
            id="2001"
            title="WOW Apple Cider Vinegar No Parabens & Sulphate Shampoo, 300mL"
            price={345.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/41rYoyUG3NL._AA210_.jpg"
          /> 

            
        </div>
        <div className='page'>
        <Product
            id="2002"
            title="Napa Hide RFID Protected Genuine High Quality Leather Wallet for Men (Brown)"
            price={299.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/41G8Q9bmb1L._AA210_.jpg"
          />
          <Product
            id="2003"
            title="Ambrane WH-83 Over Ear Wireless Headphones with Bluetooth V5.0, in-Built Mic, Deep Bass & Comfortable Ear Cushions (Black), Normal"
            price={699.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71qD-buzYOL._SX679_.jpg"
          />
          <Product
            id="2004"
            title="US Polo Association Boy's Plain Polo"
            price={799.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41Dq0DE4ANL._AC_SR400,600_.jpg"
          />

          <Product
            id="2005"
            title="Wipro Garnet 6W LED Table lamp-3 grade dimming and color changing(Cool Day Light/Neutral white/Warm White)"
            price={1149.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/41xz0TWrlJL.jpg"
          />
          </div>

          <div className='page'>
          <Product
            id="2006"
            title="Redgear Zonik Wired Gamepad for PC Games"
            price={949.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/31NSaYG4RSL._AC_SR400,600_.jpg"
          />

          <Product
            id="2007"
            title="Quantum QHM495LM 6 Light Webcam For Laptop/Desktop (Black)"
            price={599.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/41QiByqLmvL._AC_SR400,600_.jpg"
          />


          </div>
          <Footer/>
        </>        
    )
}

export default All
