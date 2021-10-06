import React from "react";
import "./Support.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faPhone,
  faPlayCircle,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Support = () => {
  return (
    <div className="container">
      <div className="row" >
        <div className='col-md-4 'style={{marginBottom:'100px'}}>
          <h1 className='mb-4'>
            <span className="text-primary">24/7</span> Live <br /> Support{" "}
          </h1>
          <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam at dolores maiores voluptates reprehenderit minus dolor dolore incidunt provident sint consequatur.</p>
        </div>
        <div className='col-md-4'>
        <h5 className='email-icon mb-3'><FontAwesomeIcon style={{color:'tomato', marginRight:'10px'}} icon={faEnvelope}  /> info@followers.com</h5>
        <h5 className='phone-icon'><FontAwesomeIcon icon={faPhone} style={{color:'orange'}} /> Live Support</h5>
        </div>
        <div className='col-md-4'>
        <h5 className='what-icon mb-3'><FontAwesomeIcon icon={faWhatsapp} style={{color:'green'}} /> +0167 255 0799</h5>
        <h5 className='video-icon'><FontAwesomeIcon icon={faPlayCircle}  style={{color:'sky-blue'}} /> +0167 255 0799</h5>
        </div>
      </div>
    </div>
  );
};

export default Support;
