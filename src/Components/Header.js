import React, { useContext } from 'react'
import './Header.css'
import Cartcontext from './Store/CartContext'

const Header = (props) => {

  const cartCtx=useContext(Cartcontext)
  let cartItemCount=0
  cartCtx.items.forEach(item=>{
    cartItemCount +=1
    console.log('items in cart:',cartItemCount)
  })

  return (
    <>
        <nav>
            <div className="nav-bar">
                <a href='#' alt='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>HOME</a>
                <a href='#' alt='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>STORE</a>
                <a href='#' alt='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>ABOUT</a>

            </div>
            <button onClick={props.opencarthandler}className='cart-btn'>Cart </button>
             <span className="cart-number">{cartItemCount}</span>

        </nav>
        <header className="page-header">
             The Generics
        </header>

    </>
  )
}

export default Header