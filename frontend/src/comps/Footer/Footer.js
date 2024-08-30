import React from 'react';
import playStore from "../imagesfol/playstore.png"
import appStore from '../imagesfol/Appstore.png'
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
<div className="leftFooter">
    <h4>DOWNLOAD OUR APP</h4>
    <p>Download App for Android and IOS mobile phone</p>
    <img src={playStore} alt="playstore"/>
    <img src={appStore} alt="Appstore"/>
      </div>

      <div className="midFooter">
<h1>Blogera</h1>
<p>Best User Experience is our first priority</p>
<p>Copyright 2024 &copy; Blogera</p>
      </div>

      <div className="rightFooter">
<h4>Follow Us</h4>
<a href="http://instagram.com/Blogera">Instagram</a>
<a href="http://youtube.com/Blogera">Youtube</a>
<a href="http://facebook.com/Blogera">Facebook</a>
      </div>

    </footer>
  )
}

export default Footer
