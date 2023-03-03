import React, { useContext } from 'react'
import './Productitem.css'
import Cartcontext from '../Store/CartContext';
import { Link } from 'react-router-dom';
// import AuthContext from '../Store/Auth-context';
// import axios from 'axios';

const ProductItem = (props) => {
  console.log(props.item)

  const cartCtx = useContext(Cartcontext);

  // const addItemToCart = (e) => {
  //   e.preventDefault();
  //   console.log('addItem')
  //   cartCtx.additems(props.item);
  //   // console.log('propsitem is',props.item)
  //   console.log('cart items', cartCtx);
  //   }

  // const id = props.item.id;
  // const title = props.item.title;
  // const price = props.item.price;
 

    // const authCtx = useContext(AuthContext);
  // const userMailId = localStorage.getItem('email');
  // console.log('mail from localStorage',userMailId);
  // const regex = /[`@.`]/g;
  // const um = userMailId.replace(regex, ''); //email without @ and .
  
  async function addItemToCart(e) {
    e.preventDefault();
    console.log('addItem');
    cartCtx.additems({...props.item})
  }

  return (
    <>
   
    <div className="product" id={props.price} >
        <Link
        to={{
          pathname: `/Store/ProductDetail/${props.id}`,
          state: {
            price: props.price,
            title: props.title,
            image: props.image,
            id: props.id,
          },
        }}
      >
        <h3>{props.title}</h3>
        <img src={props.image} alt="" />
      </Link>


         <div className="product-list-amount">
                <span>${props.price}</span>
                <button className="add-btn" onClick={addItemToCart}>Add To Cart</button>
         </div>  
    </div>
    </>
  )
}

export default ProductItem