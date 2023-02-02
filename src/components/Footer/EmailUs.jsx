import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import {email} from "../../email";
import './EmailUs.css';
import swal from "sweetalert";

import emailjs from "emailjs-com";

function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(email.serviceId, email.tempId, e.target, email.publicKey)
      .then((result) => {
          if(result.status === 200){
            swal("Email sent successfully!", "Click the button to exit", "success");
          }
      }, (error) => {
        swal("An error occurred. Try again.", "Click the button to exit", "error");
      });
}

const EmailUs = () => (
    <div className="app__newsletter">
        <div className="app__newsletter-heading">
            <SubHeading title="What pasta do you want?"/>
            <h2 className="headtext__cormorant">Send us your order!</h2>
        </div>
        <form onSubmit={sendEmail}>
            <div className="app__newsletter-input flex__center">
                <input type="text" name="name" id="name" placeholder="Enter your full name"/>
            </div>
            <div className="app__newsletter-input flex__center">
                <input type="email" name="email" id="email" placeholder="Enter your email address"/>
            </div>
            <div className="app__newsletter-input flex__center">
                <input type="text" name="subject" id="subject" placeholder="Enter the email's subject"/>
            </div>
            <div className="app__newsletter-input-order flex__center">
                <textarea type="text" name="message" id="message" cols="85" rows="8" placeholder="Enter your order" />
            </div>
            <div className="app__newsletter-input flex__center">
                <input type="submit"  className="custom__button" value="Send"/>
            </div>
        </form>
    </div>
);

export default EmailUs;