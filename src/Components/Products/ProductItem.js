import React, { useContext } from 'react'
import './Productitem.css'
import Cartcontext from '../Store/CartContext';

const ProductItem = (props) => {
  console.log(props.item)

  const cartCtx = useContext(Cartcontext);

  const addItemToCart = (e) => {
    e.preventDefault();
    console.log('addItem')
    cartCtx.additems(props.item);
    // console.log('propsitem is',props.item)
    console.log('cart items', cartCtx);
    }



  return (
    <div className="product" id={props.price} >
        <h3 >{props.title}</h3>

            <img src= {props.image} alt=''/>

         <div className="product-list-amount">
                <span>${props.price}</span>
                <button className="add-btn" onClick={addItemToCart}>Add To Cart</button>
         </div> 

    </div>
  )
}

export default ProductItem