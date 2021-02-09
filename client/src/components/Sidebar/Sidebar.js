import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './style.css';

function Sidebar() {
    return (
        <aside>
            <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
                <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="far fa-user-circle" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Company</div>
                </Link>

                {/* Divider */}

                {/* Nav Item - Dashboard */}


                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* Nav Item - Profile */}
                <Item
                    active={''}
                    href={'/profile'}
                    icon={<i className="fas fa-user-alt" />}
                    text={<span>Profile</span>}
                />

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* Nav Item - Roster */}
                <Item
                    active={''}
                    href={'/other'}
                    icon={<i className="fas fa-calendar-week" />}
                    text={<span>Feed</span>}
                />

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />

                <Item
                    active={''}
                    href={'/upload'}
                    icon={<i className="fas fa-calendar-week" />}
                    text={<span>upload</span>}
                />
            </ul>
        </aside>
    );
}
export default Sidebar;
