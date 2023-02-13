import React from 'react'
import spotify from './Images/spotify.png'
import fb from './Images/fb.png'
import utube from './Images/youtube.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-icons">
             <h2 className="footer-title">The Generics</h2>

                <div className="footer-logo">
                <img src= {utube} alt='youtube-logo' style={{width:'35px',height:'35px'}} />


                <img src= {spotify} alt='spotify-logo' style={{width:'30px',height:'30px'}}/>


                <img src= {fb} alt='fb-logo'  style={{width:'30px',height:'30px'}}/>

                </div>

        </div>
    </footer>
  )
}

export default Footer