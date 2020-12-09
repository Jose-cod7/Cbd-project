
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="left-side">
                            <h5>© 2020 CULTIVANDO BIENESTAR</h5>
                            <ul className="list-unstyled">
                                <li>All rights reserved</li>
                            </ul>
                        </div>    
                    </div>
                    <div className="col">
                        <div className="social-container">
                            <a href="https://www.youtube.com/c/jamesqquick"
                            className="youtube social">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>
                            <a href="https://www.facebook.com/learnbuildteach/"
                            className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/learnbuildteach"
                            className="instagram social">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                         </div>
                    </div>
                    <div className="col">
                        <div className="right-side">
                            <h5>CONTÁCTANOS</h5>
                            <ul className="list-unstyled">
                                <li>+34 634 239 663</li>
                                <li>info@cultivandobienestar.com</li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;