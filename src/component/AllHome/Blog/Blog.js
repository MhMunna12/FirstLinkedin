import React from 'react';
import './Blog.css';
import {Button }from 'react-bootstrap';


const Blog = () => {
    return (
        <div className="container">
            <div className='text-center p-5'>
                <h1>Blog Post</h1>
            </div>
            <div className="row">
                <div className="col-md-4 blog-body">
                   <div className="background">
                   <h3 className="">Instagram user</h3>
                   </div>
                   <h4 className='mb-3'>Instagram user</h4>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus possimus eum cupiditate ipsam impedit est rerum doloremque quia, fugit inventore quasi facilis quo fugiat neque?</p>
                   <Button className="btn-cycle text-white">Read More</Button>
                </div>

                <div className="col-md-4 blog-body"style={{marginLeft:'40px'}}>
                   <div className="background-fb">
                   <h3 className="">Use tinder without</h3>
                   </div>
                   <h4 className='mb-3'>Facebook user</h4>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus possimus eum cupiditate ipsam impedit est rerum doloremque quia, fugit inventore quasi facilis quo fugiat neque?</p>
                   <Button className="btn-cycle text-white bg-primary">Read More</Button>
                </div>
                <div className="col-md-4 blog-body" style={{marginLeft:'40px'}}>
                   <div className="background-snap">
                   <h3 className="">SnapChat user</h3>
                   </div>
                   <h4 className='mb-3'>How to recover deleted</h4>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus possimus eum cupiditate ipsam impedit est rerum doloremque quia, fugit inventore quasi facilis quo fugiat neque?</p>
                   <Button className="btn-cycle text-white bg-primary">Read More</Button>
                </div>
            </div>
        </div>
    );
};

export default Blog;