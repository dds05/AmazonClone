import React from 'react'
import Footer from '../Footer'
import Product from '../Product'
import './pages.css'
function All() {
    return (
        <>
        <div className='start'>Home and Kitchen</div>
        <div className='pagestart'>
           <Product 
            id="5000"
            title="Gst Royale Plus Schott Glasstop Gt02"
            price={4599.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51pzb-n0rTL._SX679_.jpg"
          />
          <Product
            id="5001"
            title="Butterfly Hero Mixer Grinder, 500W, 3 Jars (Grey)"
            price={1899.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71r6x8qJF4L._SX679_.jpg"
          /> 

            
        </div>
        <div className='page'>
        <Product
            id="5002"
            title="Pigeon By Stovekraft Favourite Induction Base Aluminium Pressure Cooker with Outer Lid, 5 Litres, Silver"
            price={1019.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61cnMMapo9L._SX679_.jpg"
          />
          <Product
            id="5003"
            title="Mokshith Electric ceramic cooker induction cooker household smart new battery cooker light wave cooker electric tea cooker desktop frying cooker multi function touch panel"
            price={4999.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/418aKnyEBAL.jpg"
          />
          <Product
            id="5004"
            title="DEEJET Knife Sharpener Manual for Sharpening Dull Stainless Steel,Ceramic Knife and Steel Knives for 3 Stage Kitchen Sharpening Tool"
            price={389.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61bjg-t0IBL._SX679_.jpg"
          />

          <Product
            id="5005"
            title="Pigeon by Stovekraft New Handy Mini Polypropylene Chopper with 3 Blades, Green"
            price={219.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51RXzjrUmkL._SX425_.jpg"
          />
          </div>

          <div className='page'>
          <Product
            id="5006"
            title="Kent 16025 700-Watt Sandwich Grill (Black)"
            price={1698.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71svkaJIGOL._SX679_.jpg"
          />

          <Product
            id="5007"
            title="Prestige Sandwich Maker PSMFD 01"
            price={1019.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41yWwDhLF7L.jpg"
          />


          </div>
          <Footer/>
        </>        
    )
}

export default All
