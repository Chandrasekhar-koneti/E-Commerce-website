import React, {useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Button from './Components/Button';
import AvailableProducts from './Components/Products/AvailableProduct'
import CartItem from './Components/Cart/CartItem';
import CartProvider from './Components/Store/CartProvider';

function App() {

  const [cartstatus,setcartstatus]=useState(false)
  const showcartlist=()=>{
    setcartstatus(true)
  }

  const hidecartlist=()=>{
    setcartstatus(false)
  }

  return (
    <CartProvider>
      <Header opencarthandler={showcartlist}/>
      {cartstatus && <CartItem onClick={hidecartlist}/>}
      <AvailableProducts/>
      <Button/>
      <Footer/>
    </CartProvider>
  );
}

export default App;