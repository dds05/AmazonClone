import React from 'react'
import Footer from '../Footer'
import Product from '../Product'
import './pages.css'
function All() {
    return (
        <>
        <div className='start'> BestSellers</div>
        <div className='pagestart'>
           <Product 
            id="6000"
            title="Indian Polity - For Civil Services and Other State Examinations | 6th Edition Paperback – 27 December 2019"
            price={595.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51rKNmuSrsL._SX258_BO1,204,203,200_.jpg"
          />
          <Product
            id="6001"
            title="Alpino Natural Peanut Butter Crunch 1 KG | Unsweetened | Made with 100% Roasted Peanuts | 30% Protein | No Added Sugar | No Added Salt | No Hydrogenated Oils | Non GMO | Gluten Free | Vegan"
            price={379.0}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/81Y6d3i8EoL._AC_UL200_SR200,200_.jpg"
          /> 

            
        </div>
        <div className='page'>
        <Product
            id="6002"
            title="Callas Multipurpose Foldable Laptop Table with Cup Holder | Drawer | Mac Holder | Table Holder Study Table, Breakfast Table, Foldable and Portable/Ergonomic)"
            price={849.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61HZfQba3NL._SX522_.jpg"
          />
          <Product
            id="6003"
            title="Yogabar Wholegrain Breakfast Muesli - Dark Chocolate + Cranberry, 400g (Pack of 2)"
            price={496.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81iHcPgAFlL._SL1500_.jpg"
          />
          <Product
            id="6004"
            title="TYPIFY® PU Leather Teddy Keychain Women Backpack Handbag"
            price={399.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/61rHiZbxeEL._AC_UL200_SR200,200_.jpg"
          />

            <Product
            id="6005"
            title="Alicia Souza - The 2021 Ultimate Planner & Pocket Planner | Gold Spiral Binder | Sturdy Printed Box | Adorable Illustrations | Planner size - 23 cm x 19 cm | Page Size - 21cm x 15 cm"
            price={899.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71A7LAb9ioL._SL1032_.jpg"
           />
        </div>


        <div className='page'>

          <Product
            id="6006"
            title="Steelbird SBH-17 Terminator Full Face Graphic Helmet (Medium 580 MM, Glossy Fluo Neon Helmet Fitted with Clear Visor and Extra Blue Visor)"
            price={2277.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61acSgDNcIL._SX522_.jpg"
          />
          <Product
            id="6007"
            title="SanDisk Ultra Dual 64GB USB 3.0 OTG Pen Drive"
            price={779.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71bV203ASmL._SX522_.jpg"
          />
        </div>
        <Footer/>
        </>        
    )
}

export default All
