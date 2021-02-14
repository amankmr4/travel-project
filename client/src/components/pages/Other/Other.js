import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DashboardNewsCard from '../../DashboardNewsCard/DashboardNewsCard';
import './style.css';

function Roster() {
    return (
        <div className="container-fluid h-100 p-0 m-0">
            <div className="row">
                <div className="col-lg-1">
                    <Sidebar />
                </div>
                <div className="content col-lg-8">
                    <DashboardNewsCard />
                </div>
            </div>
            {/* <div className="content">
                <DashboardNewsCard />
            </div> */}
        </div>
    );
}

export default Roster;
