import React from "react";
import { Link } from "react-router-dom";
import "../homepage/css/signUpCTA.css";
import Button from "./Button";

import CTA2Image from "../homepage/img/cta2.png";

const SignUpCTA = () => {
  return (
    <section className="cta2-section">
      <div className="cta2-wrapper">
        <div className="cta2-body">
          <h1>Sign up for free</h1>
          <p>You can either signup as a User or as a Host.</p>
          <div className="signUp-btns">
            <Link to="signup">
              <Button text="Sign up as User" />
            </Link>

            <Link to="/become-host">
              <button className="host-signUp-btn">Sign up as Host</button>
            </Link>
          </div>
        </div>
        <div className="cta2-image">
          <img src={CTA2Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SignUpCTA;
