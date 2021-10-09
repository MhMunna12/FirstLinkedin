import React from 'react';
import './ImportantFlowers.css';
import linkedin from '../../../images/linkedin.jpg';
import cycle from '../../../images/cycle.jpg';
import {Button} from 'react-bootstrap';

const ImportantFlowers = () => {
    return (
        <div className='im-flowers container'>
            <div className='row'>
                <div className='col-md-6 linkedin-bg'>
                    <img className='img-fluid' src={linkedin} alt="" />
                </div>
                <div className='col-md-6 linkedin-content'>
                    <h1>Why Are <span style={{color:'#1861c0'}}>LinkedIn <br/>Followers </span>Importance?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolorem distinctio. Dignissimos facilis, incidunt, placeat voluptas ex odit enim repudiandae sed consequuntur nisi inventore assumenda officiis eveniet consequatur nulla tempora obcaecati. Quasi numquam obcaecati voluptates nisi? Tempore, consequuntur esse est ullam voluptatibus quia, dolor reprehenderit numquam in praesentium nam architecto, officiis nihil nobis rerum fugit!</p>
                    <Button className='btn-more'>Read More</Button>
                </div>
                <div className='col-md-6  linkedin-content'>
                    <h1><span style={{color:'#1861c0'}}>Key Reasons</span> to Buy <br/> LinkedIn Followers</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolorem distinctio. Dignissimos facilis, incidunt, placeat voluptas ex odit enim repudiandae sed consequuntur nisi inventore assumenda officiis eveniet consequatur nulla tempora obcaecati. Quasi numquam obcaecati voluptates nisi? Tempore, consequuntur esse est ullam voluptatibus quia, dolor reprehenderit numquam in praesentium nam architecto, officiis nihil nobis rerum fugit!</p>
                    <Button className='btn-cycle'>Read More</Button>
                    
                </div>
                <div className='col-md-6 linkedin-bg'>
                <img className='img-fluid' src={linkedin} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImportantFlowers;