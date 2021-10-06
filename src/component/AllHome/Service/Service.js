import React from 'react';
import './Service.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShareAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';

const Service = () => {
    return (
        <div>
            <section className="linkedin-service">
                <div className="container mt-5 mb-5">
                    <div className="link-heading">
                        <h1 className="heading -link">Popular Linkedin<br />Services</h1>
                        <div className="mt-5 mb-5">
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere modi veritatis quos beatae
                                mollitia molestiae dolorum harum laudantium culpa?<br />Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odit, error.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="card cardses-first p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icon-first"> <FontAwesomeIcon  icon={faLinkedinIn}  /> </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h4 className="heading">Linkedin<br />Services</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card cardses p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icon"> <i className="bx bxl-dribbble"></i> </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h4 className="heading">Linkedin<br />Likes</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card cardses p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icon"> <i className="bx bxl-reddit"></i> </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h4 className="heading">Linkedin <br />Connect</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card cardses p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icon"> <FontAwesomeIcon  icon={faShareAlt}  /> </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h4 className="heading">Linkedin <br />Shares</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card cardses p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icon"> <i className="bx bxl-reddit"></i> </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h4 className="heading">Linkedin <br />Followers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card cardses p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icon"> <FontAwesomeIcon  icon={faCommentAlt}  /> </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h4 className="heading">Linkedin <br />Comments</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="linkedin-description">
                <div className="container mt-5 mb-5">
                   
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card cards p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icons"><i className="fab fa-linkedin"></i> </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h3 className="headings">Visibility</h3>
                                </div>
                                <div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo pariatur voluptates dicta! Tenetur, officia ratione nemo enim repellat tempore provident veritatis eos consequatur? Possimus deleniti impedit consectetur doloremque qui vitae rem, minima alias, et natus obcaecati odit, maxime provident?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card cards p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icons"> <i className="bx bxl-dribbble"></i> </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h3 className="headings">Trust</h3>
                                </div>
                                <div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo pariatur voluptates dicta! Tenetur, officia ratione nemo enim repellat tempore provident veritatis eos consequatur? Possimus deleniti impedit consectetur doloremque qui vitae rem, minima alias, et natus obcaecati odit, maxime provident?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card cards p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icons"> <i className="bx bxl-reddit"></i> </div>
                                    </div>
                                </div>
                                <div className="mt-3 headings">
                                    <h3 className="">Organic</h3>
                                </div>
                                <div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis illo pariatur voluptates dicta! Tenetur, officia ratione nemo enim repellat tempore provident veritatis eos consequatur? Possimus deleniti impedit consectetur doloremque qui vitae rem, minima alias, et natus obcaecati odit, maxime provident?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
};

export default Service;