import React from 'react';

function BrandDescription() {
    return (
        <div className="p-0 m-0 container-fluid d-flex justify-content-center">
            <div className="p-0 m-0 row">
                <div className="cardBackground card col-md-12 col-xs-12">
                    <div className="card-body">
                        <h5 className="card-title">About Company</h5>
                        <p className="card-text">
                            We are a website based on helping people connect with their lockdown vacations.
                            Either it be a small hike, a swim down at the beach or a fishing spot you have always wanted to show off.
                            You can add them all here.
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
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandDescription;
