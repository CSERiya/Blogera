import React from "react";
import "./Contact.css";
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:riyademo234@gmail.com">
      <FaEnvelope/> Mail Us: riyademo234@gmail.com
      </a>
      <a className="mailBtn" href="tel: 108-0012-0013">
      <FaPhone/> Call Us: 108-0012-0013
      </a>
    </div>
  );
};

export default Contact;
