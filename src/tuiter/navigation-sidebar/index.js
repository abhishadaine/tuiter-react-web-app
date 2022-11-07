import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

import '@fortawesome/fontawesome-free/css/all.css';
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="fa-brands fa-twitter"></i>
                Tuiter
            </a>

            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="fa-solid fa-house-chimney" ></i>
                Home
            </Link>

            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="fa-solid fa-hashtag"></i>
                Explore
            </Link>

            <Link to="/" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="fa-solid fa-bell"></i>
                Notifications
            </Link>

            <Link to="/" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fa-solid fa-envelope"></i>
                Messages
            </Link>

            <Link to="/" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fa-solid fa-bookmark"></i>
                Bookmarks
            </Link>

            <Link to="/" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fa-solid fa-list"></i>
                Lists
            </Link>

            <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="fa-solid fa-user"></i>
                Profile
            </Link>

            <Link to="/" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="fa-solid fa-circle-info"></i>
                More
            </Link>
        </div>
    );



};
export default NavigationSidebar;

