import React from 'react';


import Home from './Home/Home';
import LinkedIn_F from './LinkedIn_F/LinkedIn_F';

import Newsletter from './Newsletter/Newsletter';
import Question from './Question/Question';
import Service from './Service/Service';
import Vedio from './Vedio/Vedio';

const AllHome = () => {
    return (
        <div>
            <Home/>
            <LinkedIn_F/>
            <Service />
            <Vedio />
            <Question />
            <Newsletter />
        </div>
    );
};

export default AllHome;