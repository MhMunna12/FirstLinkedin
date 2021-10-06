import React from 'react';
require('./Newsletter.css')

const Newsletter = () => {
    return (
        <section class="newslwtter container">
        <div class="d-flex justify-content-center align-items-center">

            <p className="p-5">Subscribe to our new events</p>


            <div class="input-group mb-3 ms-5">
                <input type="text" class="form-control" placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span class="input-group-text" id="basic-addon2">submit</span>
              </div>
        </div>
    </section>
    );
};

export default Newsletter;