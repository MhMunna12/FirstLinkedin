import React from 'react';
import './Register.css';
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';
import Footer from '../AllHome/Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faPhone,
  faPlayCircle,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import signup from '../../images/singUp.png';
const Register = () => {
    return (
        <div className='login-color'>
            <div className='container'>
                <div className='login-main'>
                    <p className="text-primary">Welcome to our <br />  <span style={{fontWeight:'bold'}}>FastLinkedIn</span> Community</p>
                </div>
                <div className='row'>
                    <div className='col-md-5'>
                        <input type="email" className='form-control login-text' placeholder="Email" name="email" id="" /><br />
                        <input type="password" className='form-control login-text' placeholder="Password" name="password" id="" /><br />
                        <input type="password" className='form-control login-text' placeholder="Re-Password" name="re-password" id="" /><br />
                        <div className='d-grid'>
                            <Button className="bg-primary btn login-btn">Sign In</Button>
                        </div>
                        <br />
                        <p className='text-center'>Don't have any  account? <Link> Sign In </Link> </p>
                        <div className='d-grid'>
                            <Button className=" btn google"><FontAwesomeIcon icon={faPhone} style={{color:'', marginRight:'5px'}} /> Signin with Google</Button><br />
                            <Button className=" btn facebook">Signin with Facebook</Button>
                        </div>
                    </div>
                    <div className='col-md-7 register-image'>
                        <img src={signup} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Register;