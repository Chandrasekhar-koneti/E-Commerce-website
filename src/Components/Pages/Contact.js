import classes from './Contact.module.css'
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import 'react-bootstrap'
import Footer from '../Footer'



const Contact=()=>{

    const nameRef=useRef('')
    const emailRef=useRef('')
    const phoneRef=useRef('')
    
        const saveuserdetails=(event)=>{
        event.preventDefault()

        const details={
            name:nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value
        }
        addhandler(details)
    }

        async function addhandler(details){
        const response= await fetch('https://ecommerce-c5a0a-default-rtdb.firebaseio.com//contactdetails.json',
        {
            method:'POST',
            body:JSON.stringify(details),
            headers:{
                'Content-Type':'application/json'
              }
        })
        const data= await response.json()
        console.log(data)
        nameRef.current.valueOf.reset()
        emailRef.current.value.reset()
        phoneRef.current.value.reset()
    }


    return(
        <React.Fragment>
            <nav>
            <div className="nav-bar">
                <NavLink to='/' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} 
                className="nav-home">HOME</NavLink>
                <NavLink to='/store' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} 
                className="nav-store">STORE</NavLink>
                <NavLink to='/about' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} 
                className="nav-about">ABOUT</NavLink>
                <NavLink to='/contact' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} 
                className="nav-about">CONTACT</NavLink>
            </div>
        </nav>
        <header className="page-header">
             The Generics
        </header>
        <form className={classes.pad} onSubmit={saveuserdetails}>
        <div className={classes.card}>
        <div className={classes.control}>
            <h1>Please Fill in the Form to Proceed</h1>
            <label htmlFor="name">User-Name</label>
            <input type='text' id='text' placeholder='Your Name' ref={nameRef} ></input>
            <label htmlFor="email">Email-ID</label>
            <input type='email' id='email' placeholder='Email-Id' ref={emailRef}></input>
            <label htmlFor="phone">PhoneNumber</label>
            <input type='number' id='number' placeholder='PhoneNumber' ref={phoneRef}></input>

        </div>

        </div>
         <button className={classes.button} onClick={saveuserdetails}>SubmitDetails</button>
        </form>  
        <Footer />

        </React.Fragment>
    )
}

export default Contact