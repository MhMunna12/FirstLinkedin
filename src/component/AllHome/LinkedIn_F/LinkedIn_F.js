import React from 'react';
import './LinkedIn_F.css';
import ImportantFlowers from '../ImportantFlowers/ImportantFlowers';
import BuyFlowers from '../BuyFlowers/BuyFlowers';
import Comment from '../Comment/Comment';
import Blog from '../Blog/Blog';
import Support from '../Support/Support';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Video from '../Video/Video';
import Question from '../Question/Question';
import Newsletter from '../Newsletter/Newsletter';

const LinkedIn_F = () => {
    return (
        <div className='im-flowers '>
            <Service/>
            <ImportantFlowers/>
            <BuyFlowers/>
            <Video/>
            <Question/>
            <Newsletter/>
            <Comment/>
            <Blog/>
            <Support/>
            <Footer/>
        </div>
    );
};

export default LinkedIn_F;