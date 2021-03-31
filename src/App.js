import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch ,Route}
from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import React,{useEffect} from 'react';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';
import Footer from './Footer.js';
import Subbar from './Subbar';
import All from './pages/All';
import BestSellers from './pages/BestSellers';
import Mobiles from './pages/Mobiles';
import TodaysDeals from './pages/TodaysDeals';
import HomeandKitchen from './pages/HomeandKitchen';
import Fashion from './pages/Fashion';
import Electronics from './pages/Electronics';
import ScrollToTop from './ScrollToTop';


const promise=loadStripe('pk_test_51IZwn8SC5Cl7SbPioc7D44f54uEl4GcG9YusAjOlQMT8eZ5xID46qp0jhrp6I8FbTYQIExi7qAfc81rWqn1JDQxi00mecy2aGZ');

function App() {

  



  const[{basket},dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{

      console.log(authUser);
      // user is logged in
      if(authUser){

        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      //user is logged out
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
      <ScrollToTop/>
    <div className="app">
      
      <Switch>

        
      <Route path="/orders">
      <Header/>
          <Orders/>
        </Route>


        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
          
        </Route>
       
        <Route path='/all'>
          <Header/>
          <All/>
          </Route>
          
          <Route path='/bestsellers'>
          <Header/>
          <BestSellers/>
          </Route>

          <Route path='/mobiles'>
          <Header/>
          <Mobiles/>
          </Route>

          
          <Route path='/todaysdeals'>
          <Header/>
          <TodaysDeals/>
          </Route>
          
          <Route path='/fashion'>
          <Header/>
          <Fashion/>
          </Route>
          
          <Route path='/electronics'>
          <Header/>
          <Electronics/>
          </Route>
          
          <Route path='/homeandkitchen'>
          <Header/>
          <HomeandKitchen/>
          </Route>


        <Route path="/">
          <Header/>
          <Subbar/>
          <Home/>
          
          <Footer/>
        </Route>




      </Switch>
     
    </div>
    
    </Router>
  );
}

export default App;
