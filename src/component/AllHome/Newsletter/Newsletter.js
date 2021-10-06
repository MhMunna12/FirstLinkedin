import React from 'react';
require('./Newsletter.css')

const Newsletter = () => {
    return (
    <div className='newsletter-main'>
        <div className='container'>
            <div className='row p-4'>
                <div className='col-md-6 mt-5'>
                    <h6 className='text-white'>Want to up to date ? Subscribe to our Newsletter!</h6>
                </div>
                <div className='col-md-6 mt-5'>
                <div class="input-group">
                    <input type="text" className="form-control search-input" placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className="input-group-text input-btn" id="basic-addon2">submit</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Newsletter;