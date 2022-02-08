import React from 'react'
import { Link } from 'react-router-dom';
import '../homepage/css/footer.css'

import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="name">
                    <h4>Pebbles Signature</h4>
                </div>
                <div className="links">
                    <div className="site-map">
                        <Link to="#">About Us</Link>
                        <Link to="#">Contact</Link>
                        <Link to="#">Terms and Conditions</Link>
                    </div>
                    <div className="site-map">
                        <Link to="#">
                            <FontAwesomeIcon className="followus-icons" icon={faFacebook} />Facebook</Link>
                        <Link to="#">
                            <FontAwesomeIcon className="followus-icons" icon={faTwitter} />Twitter</Link>
                        <Link to="#">
                            <FontAwesomeIcon className="followus-icons" icon={faInstagram} />Instagram</Link>
                    </div>
                </div>

                <div className="subscribe-card">
                    <p>Subscribe to our newsletter</p>
                    <form className="sub-form">
                        <div className="form-input-group">
                            <label className="form-input-label" for="email" hidden></label>
                            <input className="form-input-email" type="email" name="email" placeholder="Email Address" required />
                        </div>

                        <div className="form-input-group">
                            <label className="form-input-label" for="submit" hidden>button</label>
                            <button className="form-input-button" name="submit" type="submit" >Ok</button>
                        </div>
                    </form>
                </div>
            </div>

        </footer>
    )
}

export default Footer
