import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
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
                {/* <a href='#' alt='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>HOME</a>
                <a href='#' alt='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>STORE</a>
                <a href='#' alt='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>ABOUT</a>
                <a href='#' alt='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>CONTACT</a> */}
                <NavLink  to='/home' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-home">HOME</NavLink>
                <NavLink to='/store' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-store">STORE</NavLink>
                <NavLink to='/about' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">ABOUT</NavLink>
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