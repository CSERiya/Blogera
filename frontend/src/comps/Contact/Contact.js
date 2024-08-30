import React from "react";
import "./Contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:riyademo234@gmail.com">
      <MailOutlineIcon/><Button>Mail Us: riyademo234@gmail.com</Button>
      </a>
      <a className="mailBtn" href="tel: 108-0012-0013">
      <PhoneIcon/><Button>Call Us: 108-0012-0013</Button>
      </a>
    </div>
  );
};

export default Contact;
