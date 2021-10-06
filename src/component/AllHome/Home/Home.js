import React from 'react';
import './Home.css';
import NavBar from './NavBar/NavBar';
import Body from '../Home/Body/Body'
const Home = () => {
    return (
        <div className='home-part'>
            <NavBar/>
            <Body/>
        </div>
    );
};

export default Home;