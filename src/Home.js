import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import data from './data';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';
import Footer from "./Footer";


function Home() {
    const[people,setPeople]=useState(data);
    const[index,setIndex]=useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, people]);
    
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);







  return (
    <div className="home">
      <div className="home__container">
      <AiOutlineLeft onClick={()=>setIndex(index-1)}  style={{zIndex:1,position:"relative",top:"117px",cursor:"pointer"}}
      size={42}/>

      <AiOutlineRight onClick={()=>setIndex(index+1)} style={{zIndex:1,position:"absolute",top:"117px",right:"0px",cursor:"pointer"}} size={42}/>
          

        {people.map((item,personIndex)=>{
            let position='nextSlide';
            if (personIndex === index) {
                position = 'activeSlide';
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = 'lastSlide';
              }

            

            return(
                <article className={position}>
                <img
                className="home__image"
                src={item.image}
                alt=""/>
               

              
                </article>



            )
        })}
       

        <div className="home__row">
        <Product
            id="1002"
            title="New Apple iPhone 12 Pro (256GB) - Graphite"
            price={129900.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71YlH-4MUQL._AC_UY327_FMwebp_QL65_.jpg"
          />
          
          <Product
            id="49538094"
            title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
            price={29363.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking"
            price={9999.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={4000.00}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={29999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={45999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        
        
     
        
        
        
        


        

        
        


        
      </div>
     
    </div>
      
  );
}

export default Home;