import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import './Home.css'

const Home=()=>{

    return(
        <div>
            <nav>
            <div className="nav-bar">
                <NavLink  to='/' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} 
                className="nav-home">HOME</NavLink>
                <NavLink to='/store' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} 
                className="nav-store">STORE</NavLink>
                <NavLink to='/about' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} 
                className="nav-about">ABOUT</NavLink>
                <NavLink to='/contact' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} 
                className="nav-about">CONTACT</NavLink>

            </div>
            </nav>
            <div className="page-header" style={{color: 'white', backgroundColor: 'gray',paddingTop: '63px'}}>
            The Generics <br/>
            <button className='album'>Get the Latest Album</button>
            <button className='play-btn'>▶️</button>
            </div>

            <section id = 'tours'>
            <div className="tour-list">
                <h2 style={{fontFamily:'cursive'}}>TOURS</h2>
                <div className="tour-item">
                    <span className="tour-date">JUNE 16</span>
                    <span  className='tour-place'>DETROIT, MI</span>
                    <span className='tour-place-1'>DTE ENERGY MUSIC THEATRE</span>
                    <button className='tour-btn'>BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUNE 19</span>
                    <span className='tour-place'>TORONTO,ON</span>
                    <span className='tour-place-1'>BUDWEISER STAGE</span>
                    <button className='tour-btn'>BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUNE 22</span>
                    <span className='tour-place'>BRISTOW</span>
                    <span className='tour-place-1'>JIGGY LUBE LIVE</span>
                    <button className='tour-btn'>BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUNE 29</span>
                    <span className='tour-place'>PHOENIX,AZ</span>
                    <span className='tour-place-1'>AK-CHIN PAVILON</span>
                    <button className='tour-btn'>BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JULY 2</span>
                    <span className='tour-place'>LAS VEGAS, NV</span>
                    <span className='tour-place-1'>T-MOBILE ARENA</span>
                    <button className='tour-btn'>BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JULY 10</span>
                    <span className='tour-place'>CONCORD, CA</span>
                    <span className='tour-place-1'>CONCORD PAVILION</span>
                    <button className='tour-btn'>BUY TICKETS</button>
                </div>
            </div>
        </section>

        <Footer />
        </div>
    )
}


export default Home