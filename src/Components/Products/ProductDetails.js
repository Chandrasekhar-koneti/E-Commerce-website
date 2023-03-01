import React, { Fragment } from "react"
import {useParams,useLocation}from 'react-router-dom'
import classes from'./ProductDetail.module.css'

const ProductDetail=()=>{
const params=useParams()
const location=useLocation()

return(
    <Fragment>
        <div className={classes.mar}>
        <img className={classes.img} src={location.state.image} alt='imagepic'/>
        <div>
        <h1 className={classes.product}>ProductDetails</h1>
        </div>
        <h2>Title:{location.state.title}</h2>
        <h4>Price:${location.state.price}</h4>
        
        <p>Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non bibendum tortor.
         Quisque vestibulum dignissim tincidunt. Aliquam pretium neque sem, id finibus neque elementum et. </p>
        </div>
    </Fragment>
)
}

export default ProductDetail