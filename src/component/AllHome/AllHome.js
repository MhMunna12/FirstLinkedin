import React from 'react';
import Question from '../AllHome/Question/Question';

import Home from './Home/Home';
import LinkedIn_F from './LinkedIn_F/LinkedIn_F';
import Contact_us from '../Contact_us/Contact_us'

const AllHome = () => {
    return (
        <div>
            <Home/>
            <LinkedIn_F/>
            {/* <Contact_us/> */}
        </div>
    );
};

export default AllHome;