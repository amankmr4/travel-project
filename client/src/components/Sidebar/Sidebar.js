import React from 'react';
import Item from './Item';
import './style.css';

function Sidebar() {
    return (
        <aside>
            <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">


                <Item
                    active={''}
                    href={'/profile'}
                    icon={<i className="fas fa-user-alt" />}
                    text={<span className="span">Profile</span >}
                />


                <hr className="sidebar-divider d-none d-md-block" />


                <Item
                    active={''}
                    href={'/other'}
                    icon={<i className="fas fa-calendar-week" />}
                    text={<span className="span">Feed</span>}
                />

                <hr className="sidebar-divider d-none d-md-block" />

                <Item
                    active={''}
                    href={'/upload'}
                    icon={<i className="fas fa-calendar-week" />}
                    text={<span className="span">upload</span >}
                />
            </ul>
        </aside>
    );
}
export default Sidebar;
