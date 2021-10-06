import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Form,
  NavDropdown,
  FormControl,
  Container,
  Button,
  Navbar,
} from "react-bootstrap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <div className="container">
      <Navbar expand="lg">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link style={{color: "white"}}>
                <FontAwesomeIcon icon={faWhatsapp} style={{color: "white"}} /> +0167 255 0799
              </Nav.Link>
              <Nav.Link style={{color: "white"}}>
                <FontAwesomeIcon icon={faEnvelope} style={{color: "white"}} /> info@followers.com
              </Nav.Link>
              <Nav.Link style={{color: "white"}}>
                <FontAwesomeIcon icon={faClock} style={{color: "white"}}/> 24/7 Support
              </Nav.Link>
            </Nav>
            <Nav.Link
              href="/register"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Register
            </Nav.Link>
            <Nav.Link
              href="/login"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Login
            </Nav.Link>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
      </Navbar>
      <Navbar expand="lg" className="p-2">
          <h4 style={{color:'white'}}>FirstLinkedin</h4>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav.Link href="/home" className="home">
              Home
            </Nav.Link>
            <Nav.Link
              href="/price"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              href="/contact"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link style={{ color: "tomato" }}>$ 0.00</Nav.Link>
            <Nav.Link className="bag">
              <FontAwesomeIcon icon={faShoppingBag} />
            </Nav.Link>
      </Navbar>
      <hr className="hr-dotted" />
    </div>
  );
};

export default NavBar;
