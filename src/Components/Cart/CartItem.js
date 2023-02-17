import React, { useContext } from "react";
import Modal from "../UI/Modal"
import './CartItem.css'
import Cartcontext from "../Store/CartContext";


const CartItem=(props)=>{
   
    const cartCtx = useContext(Cartcontext);
    
    let amount=0;
    cartCtx.items.forEach(item => {
      
        amount += Number((item.price)*(item.quantity));
      })

      const amt=`$${amount}`
      const removeCartItem =(item) =>{
        console.log('removeCartItem')
        cartCtx.removeitems(item)
      }

      const purchasehandler=()=>{
        cartCtx.emptycartitems()
      }

      

      const cartListItem = <ul className="listrow">{
      
      cartCtx.items.map((item,index) =>   (  <li className="list-row"  key={index}>
   
         <img src = {item.imageUrl} alt='img' style={{width:'80px', height:'80px',borderRadius:'5px'}} />
            <h4 style={{alignSelf:'center'}}>{item.title}</h4>
           <span className='list-price'>${item.price}</span> 
          <span className= 'list-amount'><input type="text" 
          placeholder={item.quantity}
           style={{width:'20px', height:'20px',textAlign:'center'}} /></span> 
        
          <button className='rmv-btn' onClick = {() => removeCartItem(item)}>remove</button>
         </li>
      
      ))}
    
      </ul>    

      
    

    return(
        <Modal onclick={props.onClick}>
            <button style={{float:"right"}} onClick={props.onClick}>X</button>
            
            <h1 className="cartlist">CART</h1>
            <span className="title">ITEM</span>
            <span className="price">PRICE</span>
            <span className="quantity">QUANTITY</span>
            {cartListItem}
            <div className="total">Total <span>{amt}</span>  </div>

        <div>
            <button className="btn-order" onClick={purchasehandler}>Purchase</button>
        </div>
        </Modal>
    )
}

export default CartItem