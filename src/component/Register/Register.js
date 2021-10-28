import React, { useState } from "react";
import "./Register.css";
import Button from "@restart/ui/esm/Button";
import { Link, useHistory } from "react-router-dom";
import Footer from "../AllHome/Footer/Footer";
// import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import signup from "../../images/singUp.png";
import firebaseConfig from "./firebase.config";
import initializeAuthentication from "./firebase.init";

initializeAuthentication();
const Register = () => {
  const history = useHistory();
  const [register, setRegister] = useState({});
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const newRegister = { ...register };
    newRegister[e.target.name] = e.target.value;
    setRegister(newRegister);
    console.log("mm", newRegister);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register.password === register.repassword) {
      fetch("https://aqueous-taiga-15487.herokuapp.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      })
        .then((res) => res.json())
        .then((data) => {
          history.push("/login");
          console.log(data);
        })
        .catch((err) => console.log(err));
    } else {
      setError(true);
    }
  };

  //google signin
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  // facebook Login
  const provider = new FacebookAuthProvider();
  //   const auth = getAuth();
  const handleFacebookLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("user", user);
      })
      .catch((error) => console.log(error));
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
                onBlur={handleChange}
                className="form-control login-text"
                placeholder="Email"
                name="email"
                id=""
              />
              <br />
              <input
                type="password"
                onBlur={handleChange}
                className="form-control login-text"
                placeholder="Password"
                name="password"
                id=""
              />
              <br />
              <input
                type="password"
                onBlur={handleChange}
                className="form-control login-text"
                placeholder="Re-Password"
                name="repassword"
                id=""
              />
              {error && <p style={{ color: "red" }}>Password didn't match</p>}
              <br />
              <div className="d-grid">
                <input
                  className="submit bg-primary btn login-btn"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <br />
              <p className="text-center">
                Don't have any account? <Link to="/login"> Sign In </Link>{" "}
              </p>
            </form>

            <div className="d-grid">
              <Button className=" btn google" onClick={handleGoogleSignIn}>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "", marginRight: "5px" }}
                />{" "}
                Signin with Google
              </Button>
              <br />
              <Button className=" btn facebook" onClick={handleFacebookLogin}>
                Signin with Facebook
              </Button>
            </div>
          </div>
          <div className="col-md-7 register-image">
            <img src={signup} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
