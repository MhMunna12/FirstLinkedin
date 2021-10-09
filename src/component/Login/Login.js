import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import signin from '../../images/signIn.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faPhone,
  faPlayCircle,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import Footer from '../AllHome/Footer/Footer';
const Login = () => {
    return (
        <div className='login-color'>
            <div className='container'>
                <div className='login-main'>
                    <p className="text-primary">Welcome to our <br />  <span style={{fontWeight:'bold'}}>FastLinkedIn</span> Community</p>
                </div>
                <div className='row'>
                    <div className='col-md-5'>
                        <input type="email" className='form-control login-text' placeholder="Email" name="email" id="" /><br />
                        <input type="password" className='form-control login-text' placeholder="Password" name="email" id="" /><br />
                        <div className='d-grid'>
                            <Button className="bg-primary btn login-btn">Sign In</Button>
                        </div>
                        <br />
                        <p className='text-center'>Don't have any  account? <Link> Sign up </Link> </p>
                        <div className='d-grid'>
                            <Button className=" btn google"><FontAwesomeIcon icon={faPhone} style={{color:'', marginRight:'5px'}} /> Signin with Google</Button><br />
                            <Button className=" btn facebook">Signin with Facebook</Button>
                        </div>
                    </div>
                    <div className='col-md-7 login-image'>
                        <img src={signin} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;