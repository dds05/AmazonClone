import React from 'react'
import Footer from '../Footer'
import Product from '../Product'
import './pages.css'
function All() {
    return (
        <>
         <div className='start'>Electronics</div>
        <div className='pagestart'>
           <Product 
            id="4000"
            title="boAt Rockerz 450 Pro Bluetooth On-Ear Headphone with Mic(Luscious Black)"
            price={1999.00}
            rating={3}
            image=" https://m.media-amazon.com/images/I/61jlFEwSt+L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="4001"
            title="HP Chromebook 14a-na0003TU 14-inch Thin & Light Touchscreen Laptop (Intel N4020/4GB/64GB SSD+256GB/Chrome OS/1.46 kgs Light), Mineral SilverMicrosoft 365 Personal-One Year Subscription Included"
            price={28582.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/41Ux+MHDo-L.jpg"
          /> 

            
        </div>
        <div className='page'>
        <Product
            id="4002"
            title="ASUS ROG Strix G17, 17.3 FHD 120Hz, Intel Core i7-10750H 10th Gen, GTX 1660Ti 6GB Graphics (16GB RAM/1TB NVMe SSD/Win10/Original Black/2.83 Kg)"
            price={110589.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/41LFcPLb6qL.jpg"
          />
          <Product
            id="4003"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
            price={31999.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SX522_.jpg"
          />
          <Product
            id="4004"
            title="Shift IZI Nano Drone Camera 5MP FHD 1080P Patented 3D-Sensing Controller Autonomous Follow Me Mode 13 Mins Fly time Quadcopter UAV"
            price={13999.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61UEVtYiVpL._SY355_.jpg"
          />

          <Product
            id="4005"
            title="Sony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K Vlogging Camera and Content Creation)"
            price={69990.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/716sQB1HdPL._SY679_.jpg"
          />
          </div>

          <div className='page'>
          <Product
            id="4006"
            title="Amazfit GTR 2 Smart Watch, 1.39 AMOLED Display, SpO2 & Stress Monitor, Built-in GPS, Bluetooth Phone Calls, 3GB Music Storage, 14-Day Battery Life, 90 Sports Modes (Sport Edition)"
            price={12999.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/5189v68fgyL._SX679_.jpg"
          />

          <Product
            id="4007"
            title="LG 27 inch 4K-UHD (3840 x 2160) HDR 10 Monitor (Gaming & Design) with IPS Panel, HDMI x 2, Display Port, AMD Freesync  - 27UL500 (Silver Stand with White Body)"
            price={29999.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81U4T6K5wQL._SX679_.jpg"
          />


          </div>
          <Footer/>
        </>        
    )
}

export default All
