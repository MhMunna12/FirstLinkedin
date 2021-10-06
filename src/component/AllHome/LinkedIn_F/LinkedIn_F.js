import React from 'react';
import './LinkedIn_F.css';
import ImportantFlowers from '../ImportantFlowers/ImportantFlowers';
import BuyFlowers from '../BuyFlowers/BuyFlowers';
import Comment from '../Comment/Comment';
import Blog from '../Blog/Blog';
import Support from '../Support/Support';
import Footer from '../Footer/Footer';

const LinkedIn_F = () => {
    return (
        <div className='im-flowers '>
            <ImportantFlowers/>
            <BuyFlowers/>
            <Comment/>
            <Blog/>
            <Support/>
            <Footer/>
        </div>
    );
};

export default LinkedIn_F;