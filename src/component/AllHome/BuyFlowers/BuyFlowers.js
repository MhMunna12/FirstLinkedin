import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import "./BuyFlowers.css";
const BuyFlowers = () => {
  return (
    <div className="container">
      <div>
        <div className="p-5 text-center">
          <h1>
            How Can You{" "}
            <span style={{ color: "#1861c0" }}>
              Buy <br /> Followers?{" "}
            </span>{" "}
          </h1>
          <p style={{ color: "rgb(204, 195, 195)" }} className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            accusantium praesentium odio quod necessitatibus nisi. Aperiam
            impedit cumque earum! Nihil obcaecati neque ratione laboriosam.
            Modi, eligendi assumenda est saepe odio doloremque minima tenetur
            ipsum velit ullam magnam, aspernatur a? Quisquam.
          </p>
        </div>
        <div className="row">
          <div
            className="col-md-3 buy-flowers shadow"
            style={{ width: "16rem" }}
          >
            <button>01</button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus blanditiis omnis id dolor.
            </p>
          </div>
          <div className="col-md-3 buy-flower" style={{ width: "16rem" }}>
            <button>01</button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus blanditiis omnis id dolor.
            </p>
          </div>
          <div className="col-md-3 buy-flower" style={{ width: "16rem" }}>
            <button>01</button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus blanditiis omnis id dolor.
            </p>
          </div>
          <div className="col-md-3 buy-flower" style={{ width: "16rem" }}>
            <button>01</button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam repellendus blanditiis omnis id dolor.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 why-us">
            <h1 className="mb-4">
              Why <span style={{ color: "#1861c0" }}>Us?</span>{" "}
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptates animi assumenda totam, aliquid odit saepe tenetur nam
              neque aspernatur necessitatibus ad exercitationem vero, illo
              sapiente omnis eius consectetur. Ut voluptas nemo laborum iste
              inventore cumque aut itaque esse. Provident non dolor rem id. Nisi
              nostrum, cupiditate eveniet repudiandae reiciendis aperiam iste
              delectus eum animi, eligendi error tempora cum debitis!
            </p>
            <Button className="btn-cycle text-white">Read More</Button>
          </div>
          <div className="col-md-6 why-us-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptas cumque maiores veritatis quod asperiores
              laborum velit corrupti
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptas cumque maiores veritatis quod asperiores
              laborum velit corrupti quam minima!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptas cumque maiores veritatis quod asperiores{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptas cumque maiores veritatis quod asperiores
              laborum velit corrupti quam minima!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptas cumque maiores veritatis quod{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyFlowers;
