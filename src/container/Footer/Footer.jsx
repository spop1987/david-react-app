import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import {BsWhatsapp} from 'react-icons/bs';
import { EmailUs, FooterOverlay } from '../../components';

import './Footer.css';

const instaUrl = process.env.REACT_APP_INSTAGRAM_DAVID
const whatsappUrl = process.env.REACT_APP_WHATSAPP
const facebookUrl = process.env.REACT_APP_FACEBOOK

function sendToInstagram(){
  window.location.replace(instaUrl);
}

function sendToWhatsApp(){
  window.location.replace(whatsappUrl);
}

function sendToFacebook(){
  window.location.replace(facebookUrl);
}

const Footer = () => (
  <div className="app__footer section__padding" id="contactUs">
    <FooterOverlay/>
    <EmailUs/>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Porto Alegre, RS, Brazil</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">&quot;Discover a new way to enjoy pasta.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook onClick={sendToFacebook} />
          <BsWhatsapp onClick={sendToWhatsApp} />
          <FiInstagram onClick={sendToInstagram} />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 08:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">09:00 am - 01:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 David Max Rivillo. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;