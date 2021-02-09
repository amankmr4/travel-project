import React from 'react';

function LandingJumbo() {
    return (
        <div className="mt-5 jumbotron landingJumbo">
            <div className="mx-auto col-sm-8 jumboText">
                <h1 className="d-flex justify-content-center companyName">
                    <div className="mr-2 sidebar-brand-icon rotate-n-15">
                        <i className="far fa-user-circle" />
                    </div>
                    <div>Welcome To TravelAus</div>
                </h1>
                <h2 className="text-center companySlogan">Where You Show "Aus" how you travel</h2>
            </div>
        </div>
    );
}

export default LandingJumbo;
