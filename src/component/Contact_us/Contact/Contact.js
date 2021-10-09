import Button from "@restart/ui/esm/Button";
import React from "react";
import "./Contact.css";
import contact_img from "../../../images/contact.png";
const Contact = () => {
  return (
    <div className="container">
      <div className="p-5 text-center">
        <h1>
          <span className="text-primary">Contact</span > With <br /> Us{" "}
        </h1>
        <p style={{ color:'lightgray'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
          numquam. Optio porro hic earum temporibus sunt voluptatem nostrum ut
          sequi.Optio porro hic earum temporibus sunt voluptatem nostrum ut
          sequi.
        </p>
      </div>
      <div>
        <h3 className="text-center">
          How to order LinkedIn Followers?{" "}
          <span className="text-primary">[Vedio Guide]</span>{" "}
        </h3>

        <div className="d-flex justify-content-center align-content-center mt-5">
          <div className="embed-responsive embed-responsive-16by9 ">
            <iframe
              className="embed-responsive-item rounded"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7iLHBDvMdcE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className="text-center p-3">
          <span className="text-primary">Send</span> Message
        </h1>
        <div className="row">
          <div className="col-md-5 m-5">
            <input
              type="text"
              className="form-control message-input"
              placeholder="Your Name"
              name=""
              id=""
            />
            <br />
            <input
              type="text"
              className="form-control message-input"
              placeholder="Your Email"
              name=""
              id=""
            />
            <br />
            <input
              type="text"
              className="form-control message-input"
              placeholder="Subject"
              name=""
              id=""
            />
            <br />
            <textarea
              name=""
              id=""
              className="form-control message-text"
              placeholder="Your Message"
              cols="30"
              rows="4"
            ></textarea>
            <br />
            <div className='d-grid'>
            <Button className=" btn btn-primary from-control">
              send message
            </Button>
            </div>
            <br />
          </div>
          <div className="col-md-4 message-left">
            <img src={contact_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
