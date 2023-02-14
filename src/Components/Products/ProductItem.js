import React from 'react'
import './Productitem.css'

const ProductItem = (props) => {
  return (
    <div className="product">
        <h3 >{props.title}</h3>

            <img src= {props.image} alt=''/>

         <div className="product-list-amount">
                <span>${props.price}</span>
                <button className="add-btn">Add To Cart</button>
         </div> 

    </div>
  )
}

export default ProductItem