import React, {useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Button from './Components/Button';
import AvailableProducts from './Components/Products/AvailableProduct'
import CartItem from './Components/Cart/CartItem';
import CartProvider from './Components/Store/CartProvider';
import About from './Components/Pages/About';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router1=createBrowserRouter([
  {path:'/about',element:<About />},
  // {path:'/store',element<}
])

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
      <RouterProvider router={router1}>

      <Header opencarthandler={showcartlist}/>
      {cartstatus && <CartItem onClick={hidecartlist}/>}
      <AvailableProducts/>
      <Button/>
      <Footer/>
      </RouterProvider>
    </CartProvider>
  );
}

export default App;