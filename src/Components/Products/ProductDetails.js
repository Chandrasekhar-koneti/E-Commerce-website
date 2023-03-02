import React, { Fragment, useRef, useState } from "react"
import {useParams,useLocation, NavLink}from 'react-router-dom'
import classes from  './ProductDetail.module.css'
import ReactImageMagnify from "react-image-magnify"
import Footer from "../Footer"

const ProductDetail=()=>{
const params=useParams()
const location=useLocation()

const images=[
  'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
  ]

  const[img,setimg]=useState(images[0])
  const hoverHandler=(image,i)=>{
    setimg(image)
    // refs.current[i].ClassList.add ('active')
    for(var j=0; j<images.length; j++){
      if(i!==j){
        // refs.current[j].ClassList.remove('active')
      }
    }
  }
  const refs=useRef([])
  refs.current=[]
  const addRefs=(el)=>{
    if(el && !refs.current.includes(el)){
      refs.current.push(el)
    }
  }
  
return(
    <Fragment>
        <nav>
            <div className="nav-bar">
            <NavLink  to='/' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} 
            className="nav-home">HOME</NavLink>
            <NavLink to='/store' style={{padding:'10px', margin:'10px', textDecoration:'none', color:'white'}} 
            className='nav-home'>STORE</NavLink>
            <NavLink to='/about' style={{padding:'10px', margin:'10px', textDecoration:'none',color:'white'}} 
            className='nav-home'>ABOUT</NavLink>
            <NavLink to='/contact' style={{padding: '10px', margin: '10px',textDecoration: 'none',color:'white'}}
             className="nav-about">CONTACT</NavLink>

             </div> 
        </nav>


<div className={classes.container}>
{/* <div className={classes.mar}> */}
        {/* <img className={classes.img} src={location.state.image} alt='imagepic'/> */}
        {/* <div>
        <h1 className={classes.product}>ProductDetails</h1>
        </div>
        <h2>Title:{location.state.title}</h2>
        <h4>Price:${location.state.price}</h4>
        
        <p>Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non bibendum tortor.
         Quisque vestibulum dignissim tincidunt. Aliquam pretium neque sem, id finibus neque elementum et. </p>
        </div> */}

      <div className={classes.left}>
        <div className={classes.left_1}>
          {images.map((image,i)=>(
            <div className={ classes.img_wrap} key={i}
            // i===0 ? 'img_wrap active': 'img_wrap'
            onMouseOver={()=>hoverHandler(image,i)}
            ref={addRefs}
            >
              <img src={image} alt='imagepic' />
            </div>
          ))}
        </div>
        <div className={classes.left_2}>
          <ReactImageMagnify 
          {...{smallImage:{
            alt:'images',
            isFluidWidth:true,
            src:img
          },
          largeImage:{
            src:img,
            width:1200,
            height:1800
          }
        }}
          />
        </div>
      </div>
      <div className={classes.right}></div>
    </div>

        <div className={classes.mar}>
        
        <h1 className={classes.product}>Product Details</h1>
        <h2 className={classes.title}>{location.state.title}</h2>
        <h4>
          <span className={classes.price}>Price:${location.state.price}</span></h4>
        
        <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non bibendum tortor.
         Quisque vestibulum dignissim tincidunt. Aliquam pretium neque sem, id finibus neque elementum et. </p>
       
        </div>
        <Footer />
    </Fragment>
)
}

export default ProductDetail