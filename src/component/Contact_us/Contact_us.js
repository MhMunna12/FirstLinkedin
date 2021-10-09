import React from 'react';
import NavBar from '../AllHome/Home/NavBar/NavBar';
import Contact from './Contact/Contact';
import Footer from './../AllHome/Footer/Footer'
import Support from './../AllHome/Support/Support';
import './Contact_us.css';
const Contact_us = () => {
    return (
        <div className='contact-color'>
            <NavBar/>
            <Contact/>
            <Support/>
            <Footer/>
        </div>
    );
};

export default Contact_us;