import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faPhone,
  faPlayCircle,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import paypal from "../../../images/paypal.png";
import Button from "@restart/ui/esm/Button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-3 about-us" style={{ marginTop: "30px" }}>
            <h3 className="mb-4 mt-4">About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              quas reprehenderit harum at minus voluptates deleniti ipsa dolores
              maiores sint.
            </p>
            <img src={paypal} alt="" />
          </div>
          <div className="col-md-3 support" style={{ marginTop: "30px" }}>
            <h3 className="mb-4 mt-4">Support Links</h3>
            <h6>Pages</h6>
            <h6>Sitemap</h6>
            <h6>About us</h6>
            <h6>Terms of service</h6>
            <h6>Prices</h6>
            <h6>FAQ</h6>
          </div>
          <div className="col-md-3 important" style={{ marginTop: "30px" }}>
            <h3 className="mb-4 mt-4">Important Links</h3>
            <h6>Buy Linkedin Followers</h6>
            <h6>Buy Linkedin Connects</h6>
            <h6>Buy Linkedin Comments</h6>
            <h6>Buy Linkedin Followers</h6>
            <h6>Buy Linkedin reels views</h6>
            <h6>Buy automatic Linkedin likes</h6>
          </div>
          <div className="col-md-3 contact" style={{ marginTop: "30px" }}>
            <h3  className="mb-4 mt-4">Contact with us</h3>
            <h6><FontAwesomeIcon icon={faPhone} style={{color:'white', marginRight:'5px'}} /> +0167 255 0799</h6>
            <h6><FontAwesomeIcon style={{color:'white', marginRight:'5px'}} icon={faEnvelope}  /> info@followers.com</h6>
            <h6><FontAwesomeIcon style={{color:'white', marginRight:'5px'}} icon={faEnvelope}  /> 1845 Farland Avenue</h6>
            <h6 style={{marginLeft:'25px'}}> Pipe Creek, Tx 78063</h6>
            <Button className='button'>SEND US MESSAGE</Button>
          </div>
        </div>
        <hr style={{color:'white'}} />
        <div>
          <div  className='d-flex footer-desc'>
            <p>&copy; Copyright instafollowers 2021. All Right Received</p>
            <p>Support | Privacy | Terms and Conditions</p>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
