import React from 'react';
import './style.css';

function BrandDescription() {
    return (
        <div className="p-0 m-0 container-fluid d-flex justify-content-center footerWidth">
            <div className="p-0 m-0 row">
                <div className="cardBackground card col-md-12 col-xs-12">
                    <div className="card-body">
                        <h5 className="card-title">About Company</h5>
                        <p className="card-text">
                            We are a website purely based on what people have been doing during their lockdown travels.
                            It's a great way of getting to explore cool and unquie spots within your state and also be able to share your phtots.
                        </p>
                        <div className="card-body text-center">
                            <h5 className="card-title">Follow Us!</h5>
                            <a href="/">
                                <span className="fa-stack facebookLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack twitterLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack instagramLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-instagram fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack linkedinLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack googleLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-google fa-stack-1x"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandDescription;
