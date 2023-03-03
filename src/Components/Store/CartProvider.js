import axios from "axios"
import { useContext, useEffect, useState } from "react"
import AuthContext from "./Auth-context"
import Cartcontext from "./CartContext"

const CartProvider=(props)=>{
    
    const authctx=useContext(AuthContext)
    // const[quantity,setquantity]=useState('')
    const[cartitems,setcartitems]=useState([])
    const[flag,setflag]=useState(false)


    const usermailid=localStorage.getItem('email')
    let um
    if(usermailid !=null){
        const regex=/[`@.`]/g
        um=usermailid.replace(regex,'')
    }

    useEffect(()=>{
        console.log(authctx.isLoggedIn)
        const cartListItem=[]
        authctx.isLoggedIn && axios.get(`https://crudcrud.com/api/cc385a56c668462c84103006ba7dc843/cart${um}`)
        .then((response)=>{
            // console.log('rendered in cartprovider after resfresh',response.data)

            for( let i=0; i<response.data.length; i++){
                let item=response.data[i]
                cartListItem.push(item)
                setcartitems(cartListItem)
            }
            setcartitems(cartListItem)
        }).catch((err)=>{
            console.log(err)
        })
    },[um,flag])

async function additemtocart(item){
    const exisitingcartitems=[...cartitems]
    // console.log('clicked id item:',item.id);
    // setcartitems([...cartitems,item])
    const ItemIndex=exisitingcartitems.findIndex((i)=>(i.id)===item.id)
    //if item is already present---> updating quantity using put request
    if(ItemIndex !== -1) {
        alert('item already present')
    }

    else if(ItemIndex === -1){
        const response = await axios.post(
          `https://crudcrud.com/api/cc385a56c668462c84103006ba7dc843/cart${um}`,
          item
        );
        if (response.status === 201) {
          console.log('added item to cart', response.data)       
            let data = response.data;
            setcartitems([...exisitingcartitems, data]);
           
        } else {
          console.log('error in data saving');
        }
      }
  
  }
    
        // setcartitems([...cartitems,item])//adds item into cart if doesnot present inside the cart.
    
    // else{
    //     alert('item already added')

        // const updatedlist=exisitingcartitems[ItemIndex].quantity++
        // setquantity({...cartitems,updatedlist})
        // console.log('item already in cart', exisitingcartitems[ItemIndex].quantity);
    


const removeitemfromcart=(item)=>{
    // setcartitems(cartitems.filter(c=>c.id!==item.id))
    // console.log('remove item from cart',item)
    const exisitingcartitems=[...cartitems]
    let ItemIndex=exisitingcartitems.findIndex((i)=>i.id === item.id)
    // console.log('item index:' + ItemIndex)
    // if(exisitingcartitems[ItemIndex].quantity>1){
    //     const cartitem={
    //         price:exisitingcartitems[ItemIndex].price,
    //         title:exisitingcartitems[ItemIndex].title,
    //         quantity:Number(exisitingcartitems[ItemIndex].quantity)-1,
    //         imageurl:exisitingcartitems[ItemIndex].imageurl
    //     }
    //     axios.put(`https://crudcrud.com/api/be060056850e4bd5ace7f53a0f8a787c/cart${um}/${exisitingcartitems[ItemIndex]._id}`,
    //     cartitem)
    //     .then(()=>{
    //         let updatedItemquantity=[...cartitems]
    //         console.log('delete')
    //         updatedItemquantity[ItemIndex].quantity=cartitem.quantity
    //         setcartitems(updatedItemquantity)
    //     })
    // }
    // else if(exisitingcartitems[ItemIndex].quantity===1){
        axios.delete(`https://crudcrud.com/api/cc385a56c668462c84103006ba7dc843/cart${um}/${item._id}`)
        .then((response)=>{
            if(exisitingcartitems[ItemIndex].quantity===1){
                setcartitems(cartitems.filter(c=>c.id !== item.id))
                console.log('delete')

            }
        }).catch((error)=>console.log(error))
    }


const emptycart=()=>{
    if(cartitems.length===0){
        console.log('casrtisempty')
        alert('CART IS EMPTY PLEASE ADD SOMEITEMS')
        // setcartitems([])

    }
   else if(cartitems.length!==0){
    alert('Thank You! YOUR PURCHASE IS SUCESSFULL')
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