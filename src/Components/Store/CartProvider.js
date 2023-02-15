import { useState } from "react"
import Cartcontext from "./CartContext"

const CartProvider=(props)=>{
    
    // const[quantity,setquantity]=useState('')
    const[cartitems,setcartitems]=useState([])

const additemtocart=(item)=>{
    const exisitingcartitems=[...cartitems]
    console.log('clicked id item:',item.id);
    // setcartitems([...cartitems,item])
    const ItemIndex=exisitingcartitems.findIndex((i)=>(i.id)===item.id)

    if(ItemIndex===-1){
        setcartitems([...cartitems,item])//adds item into cart if doesnot present inside the cart.
    }
    else{
        alert('item already added')

        // const updatedlist=exisitingcartitems[ItemIndex].quantity++
        // setquantity({...cartitems,updatedlist})
        // console.log('item already in cart', exisitingcartitems[ItemIndex].quantity);
    }

}
const removeitemfromcart=(item)=>{
    setcartitems(cartitems.filter(c=>c.id!==item.id))
}

const emptycart=()=>{
    if(cartitems.length===0){
        console.log('casrtisempty')
        alert('CART IS EMPTY PLEASE ADD SOMEITEMS')
        // setcartitems([])

    }
   else if(cartitems.length!==0){
    alert('Thank YOU! YOUR PURCHASE IS SUCESSFULL')
    setcartitems([])

   }
}

    const cartlistitems={
        items:cartitems,
        additems:additemtocart,
        removeitems:removeitemfromcart,
        emptycartitems:emptycart
    }

   


    return(
        <Cartcontext.Provider value={cartlistitems}>
            {props.children}
        </Cartcontext.Provider>
    )
}

export default CartProvider