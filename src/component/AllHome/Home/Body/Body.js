import React from "react";
import "./Body.css";
import Bg_Home from "../../../../images/bg.png";
const Body = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-5">
          <h1 style={{ color: "white" }}>
            Buy <span style={{ color: "tomato" }}>Linkedin</span> Company <br />{" "}
            Page Follower
          </h1>
          <p style={{ color: "white" }} className="body-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            cupiditate repellendus natus qui, cum maiores laboriosam harum,
            consectetur ut a cumque.
          </p>
          <div>
            <a href="/oder">
              <button className="intro-btn">Order Now</button>
            </a>
            <a href="services">
              <button style={{ marginLeft: "20px" }} className="intro-btn">
                Services
              </button>
            </a>
          </div>
        </div>

        <div className="col-md-7 body-pic">
          <img className="img fluid" src={Bg_Home} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
