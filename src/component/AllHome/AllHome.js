import React from 'react';
import Home from './Home/Home';
import Newsletter from './Newsletter/Newsletter';
import Question from './Question/Question';
import Service from './Service/Service';
import Vedio from './Vedio/Vedio';

const AllHome = () => {
    return (
        <div>
            <Home/>
            <Service />
            <Vedio />
            <Question />
            <Newsletter />
        </div>
    );
};

export default AllHome;