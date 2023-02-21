import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div className='button'>
      {/* <button type="button" class="btn btn-success">Success</button> */}

      <button className='cart-button' onClick={props.opencarthandler}>See the Cart</button>
    </div>
  )
}

export default Button