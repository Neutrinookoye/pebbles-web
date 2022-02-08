import React from "react";
import "../homepage/css/becomeHostCTA.css";
import Button from "./Button";

import CTA1Image from "../homepage/img/cta1.png";
import { Link } from "react-router-dom";

const BecomeHostCTA = () => {
  return (
    <section className="cta1-section">
      <div className="cta1-wrapper">
        <div className="cta1-body">
          <h2>Become a Host</h2>
          <p>
            We love life at the beach. Being close to the ocean with access to
            endless sandy beach ensures a relaxed state of mind. It seems like
            time stands still watching the ocean
          </p>
          <Link to="/become-host">
            <Button text="Start Now" />
          </Link>
        </div>
        <div className="cta1-image">
          <img src={CTA1Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BecomeHostCTA;
