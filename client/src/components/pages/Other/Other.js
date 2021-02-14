import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DashboardNewsCard from '../../DashboardNewsCard/DashboardNewsCard';
import './style.css';

function Roster() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 body">
                    <Sidebar />
                </div>
                {/* <div className="content col-sm-10">
                    <DashboardNewsCard />
                </div>
            </div> */}
                <div className="content col-sm-10">
                    <DashboardNewsCard />
                </div>
            </div>  </div>
    );
}

export default Roster;
