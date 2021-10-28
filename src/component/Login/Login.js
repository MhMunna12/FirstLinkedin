import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import Toastify from "toastify-js";
import "./Login.css";
import signin from "../../images/signIn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../AllHome/Footer/Footer";
const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
    console.log(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://aqueous-taiga-15487.herokuapp.com/api/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          Toastify({
            text: data.error,
            backgroundColor: "red",
            duration: 3000,
          }).showToast();
        } else {
          setUser(data);
          Toastify({
            text: data.message,
            backgroundColor: "green",
            duration: 4000,
          }).showToast();
          history.push("/home");
        }
      })
      .catch((err) => console.error(err));
  };

  //google sign in
  const responseGoogle = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "https://aqueous-taiga-15487.herokuapp.com/api/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      console.log("Google signed in completed successfully", response);
    });
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
  };
  //facebook sign in
  const responseFacebook = (response) => {
    console.log(response);
    console.log(response);
    axios({
      method: "POST",
      url: "https://aqueous-taiga-15487.herokuapp.com/api/facebooklogin",
      data: { accessToken: response.accessToken, userID: response.userID },
    }).then((response) => {
      console.log("Facebook signed in completed successfully", response);
    });
  };

  return (
    <div className="login-color">
      <div className="container">
        <div className="login-main">
          <p className="text-primary">
            Welcome to our <br />{" "}
            <span style={{ fontWeight: "bold" }}>FastLinkedIn</span> Community
          </p>
        </div>
        <div className="row">
          <div className="col-md-5">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control login-text"
                placeholder="Email"
                name="email"
                onBlur={handleChange}
                required
              />
              <br />
              <input
                type="password"
                className="form-control login-text"
                placeholder="Password"
                onBlur={handleChange}
                name="password"
                required
              />
              <br />
              <div className="d-grid">
                <input
                  className="bg-primary btn login-btn"
                  type="submit"
                  value="Sign In"
                />
              </div>
              <br />
              <p className="text-center">
                Don't have any account? <Link to="/register"> Sign up </Link>{" "}
              </p>
            </form>
            {/* <div className="d-grid">
              <Button>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "", marginRight: "5px" }}
                />{" "}
                Signin with Google
              </Button>
              <br />
              <Button className=" btn facebook">Signin with Facebook</Button>

              <GoogleLogin
                clientId="518005766882-vsq4487p8hglk8n4nq751ckn2b78prnu.apps.googleusercontent.com"
                buttonText="Login with google"
                onSuccess={responseGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={"single_host_origin"}
              />

              <FacebookLogin
                appId="1296987157438853"
                autoLoad={false}
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
              />
            </div> */}
          </div>
          <div className="col-md-7 login-image">
            <img src={signin} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
