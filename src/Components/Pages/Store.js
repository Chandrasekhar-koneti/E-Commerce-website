import CartItem from "../Cart/CartItem"
import Header from "../Header"
import CartProvider from "../Store/CartProvider"
import AvailableProducts from "../Products/AvailableProduct"
import Button from "../Button"
import Footer from "../Footer"
import { useState } from "react"

const Store=()=>{
    const [cartstatus,setcartstatus]=useState(false)
  const showcartlist=()=>{
    setcartstatus(true)
  }

  const hidecartlist=()=>{
    setcartstatus(false)
  }

    return(
        <>
        <CartProvider>
        <Header opencarthandler={showcartlist}/>
      {cartstatus && <CartItem onClick={hidecartlist}/>}
      <AvailableProducts/>
      <Button opencarthandler={showcartlist}/>
      <Footer/>
        </CartProvider>
        </>
    )
}

export default Store