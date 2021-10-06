import React from 'react';
import './Video.css'

const Vedio = () => {
    return (
        <div className="vedio-section">
            <div>
                <h1 className="text-center">How to order LinkedIn <br /> Followers? <span className="text-primary">[Vedio Guide]</span> </h1>
            </div>
            <div className="d-flex justify-content-center align-content-center mt-5">
                <div className="embed-responsive embed-responsive-16by9 ">
                    <iframe className="embed-responsive-item rounded" width="560" height="315" src="https://www.youtube.com/embed/7iLHBDvMdcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Vedio;