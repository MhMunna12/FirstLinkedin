import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../AllHome/Home/NavBar/NavBar";
import BuyFlowers from '../AllHome/BuyFlowers/BuyFlowers';
import Support from '../AllHome/Support/Support';
import Footer from '../AllHome/Footer/Footer';
import "./Pricing.css";
const Pricing = () => {
  return (
    <div className="pricing-main">
    <NavBar/>
      <div className="container">
      
        <div className="price-main mb-5 mt-5">
          <div className="row">
            <div className="col-md-3 price-card" style={{ width: "16rem" }}>
              <h1>10</h1>
              <small>likes</small>
              <p>
                <Button className="btn btn-off">10% OFF NOW</Button>
              </p>
              <small>
                <del>$ 0.32</del>
              </small>
              <p style={{ fontWeight: "bold" }}>$0.29</p>
              <Button className="btn btn-primary btn-primaryr ">Buy now</Button>
            </div>


            <div className="col-md-3 price-card" style={{ width: "16rem", marginLeft:'21px' }}>
              <h1>10</h1>
              <small>likes</small>
              <p>
                <Button className="btn btn-offs">10% OFF NOW</Button>
              </p>
              <small>
                <del>$ 0.32</del>
              </small>
              <p style={{ fontWeight: "bold" }}>$0.29</p>
              <Button className="btn btn-primary btn-primar ">Buy now</Button>
            </div>

            <div className="col-md-3 price-card" style={{ width: "16rem" ,marginLeft:'21px' }}>
              <h1>10</h1>
              <small>likes</small>
              <p>
                <Button className="btn btn-offs">10% OFF NOW</Button>
              </p>
              <small>
                <del>$ 0.32</del>
              </small>
              <p style={{ fontWeight: "bold" }}>$0.29</p>
              <Button className="btn btn-primary btn-primar ">Buy now</Button>
            </div>

            <div className="col-md-3 price-card" style={{ width: "16rem" , marginLeft:'21px'}}>
              <h1>10</h1>
              <small>likes</small>
              <p>
                <Button className="btn btn-offs">10% OFF NOW</Button>
              </p>
              <small>
                <del>$ 0.32</del>
              </small>
              <p style={{ fontWeight: "bold" }}>$0.29</p>
              <Button className="btn btn-primary btn-primar ">Buy now</Button>
            </div>
            
          </div>
        </div>

        <div className="row pricing-photo mb-5">
          <div className="col-md-6 ">
            <h5>User name or photo link</h5>
            <p className="pricing" style={{ color: "rgb(241, 241, 241)" }}>
              100
            </p>
            <p className="price">
              Price : <del>$1.88</del> <span>$1.69</span>{" "}
            </p>
          </div>
          <div className="col-md-6">
            <h5>Like Quantity (Min 10 Max 50000)</h5>
            <p className="pricing">100</p>
            <div className="a-price">
              <p className="text-center">250 amount / 3.49</p>
              <div className="d-flex justify-content-center">
                <Button className="btn btn-discount">18% cheaper</Button>
                <Button className="btn btn-select">select discount</Button>
              </div>
            </div>
          </div>
          <div>
            <p className="delivery">Estimated delivery time</p>
          </div>
          <div className="row">
            <div className="col-md-6  d-grid">
              <Button className="btn cart-btn">Add to cart</Button>
            </div>
            <div className="col-md-6  d-grid">
              <Button className="btn buy-btn">Buy now</Button>
            </div>
          </div>
        </div>
        <section className="linkedin-description">
                <div className="container mt-5 mb-5">
                   
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card cards-main p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="icons bg-primary shadow"><i className="fab fa-linkedin"></i> </div>
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
                                        <div className="icons "> <i className="bx bxl-dribbble"></i> </div>
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



            <BuyFlowers/>
            <Support/>
            
      </div>
      <Footer/>
    </div>
  );
};

export default Pricing;
