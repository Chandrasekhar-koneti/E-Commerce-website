import React from "react";
// import { NavLink } from "react-bootstrap";
import './About.css'
import music from '../Images/music.jpeg'
import Footer from "../Footer";
import { NavLink } from "react-router-dom";


const About=()=>{
    return (
        <>
        {/* <Header /> */}
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

        <div className="page-header" style={{color: 'white', backgroundColor: 'gray',paddingTop: '63px'}}>
        The Generics <br/>
        </div>

        <section className='about'>

            <h1>About</h1>
            <div >
                  <img src={music} alt='logo' className='logo' />
                  <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors
                  will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main 
                  responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , 
                  The things we are accusing of these in the explication of the truth receives from the flattery
                    of her will never be the trouble and they are refused to the pleasures and the pleasures of the 
                    pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in
                    him receives at another time he may please the one that those works, we are less than they,
                      this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure,
                      this pain will be a right enjoyed by corrupt, are accusing him of all pleasures,
                        and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
                        <br></br>
                      Lorem ipsum dolor, sit amet consectetur rebates.
                      The distinction, that arise from or to. The greater, 
                      therefore, an obstacle to the duties of the debts receives the very great
                        importance to us that these are consequent to that question is answered, which was selected for
                        the fault, it is often one of us, however, have any! Moreover, this is often not at once take the
                          hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.</p>
            </div>
        </section>
            <Footer />
            {/* <footer className='footer'>
        <div className="footer-icons">
             <h2 style={{color: 'white'}}>The Generics</h2>      */}

        {/* </div> */}
    {/* // </footer> */}

    </>
    )
}

export default About