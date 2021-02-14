import React from 'react';
import Item from './Item';
import './style.css';

function Sidebar() {
    return (
        <aside>
            <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
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
