import React from 'react';
import {NavLink} from "react-router-dom"
import logo from "../../assets/logo2.svg"

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebaricon">
                <img src={logo} alt="icon" />
            </div>
            <ul className="sidebarlist ">
                <li>
                    <NavLink to="/app/dashboard" exact className="sidebaritem" activeClassName="active">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.625 4.125H4.125V9.625H9.625V4.125Z" stroke="#A4A6B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.875 4.125H12.375V9.625H17.875V4.125Z" stroke="#A4A6B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.625 12.375H4.125V17.875H9.625V12.375Z" stroke="#A4A6B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.875 12.375H12.375V17.875H17.875V12.375Z" stroke="#A4A6B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Overview</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/app/dashboard/profile" exact className="sidebaritem" activeClassName="active">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z" stroke="#A4A6B3" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M11 13.75C12.8985 13.75 14.4375 12.211 14.4375 10.3125C14.4375 8.41402 12.8985 6.875 11 6.875C9.10152 6.875 7.5625 8.41402 7.5625 10.3125C7.5625 12.211 9.10152 13.75 11 13.75Z" stroke="#A4A6B3" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M5.48242 17.1337C6.00029 16.1155 6.78981 15.2605 7.76357 14.6633C8.73734 14.0661 9.85737 13.75 10.9997 13.75C12.142 13.75 13.262 14.0661 14.2358 14.6633C15.2096 15.2605 15.9991 16.1155 16.5169 17.1337" stroke="#A4A6B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/app/dashboard/profile/c/#" exact className="sidebaritem" activeClassName="active">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 19.25L10.9994 15.8125L5.5 19.25V4.125C5.5 3.94266 5.57243 3.7678 5.70136 3.63886C5.8303 3.50993 6.00516 3.4375 6.1875 3.4375H15.8125C15.9948 3.4375 16.1697 3.50993 16.2986 3.63886C16.4276 3.7678 16.5 3.94266 16.5 4.125V19.25Z" stroke="#A4A6B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Bookings</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/app/dashboard/profile/b/#" exact className="sidebaritem" activeClassName="active">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8125 15.8125H6L3.60264 2.62702C3.57384 2.46861 3.49035 2.32533 3.36674 2.22217C3.24313 2.11901 3.08723 2.0625 2.92623 2.0625H1.375" stroke="#A4A6B3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.875 19.25C7.82424 19.25 8.59375 18.4805 8.59375 17.5312C8.59375 16.582 7.82424 15.8125 6.875 15.8125C5.92576 15.8125 5.15625 16.582 5.15625 17.5312C5.15625 18.4805 5.92576 19.25 6.875 19.25Z" stroke="#A4A6B3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.8125 19.25C16.7617 19.25 17.5312 18.4805 17.5312 17.5312C17.5312 16.582 16.7617 15.8125 15.8125 15.8125C14.8633 15.8125 14.0938 16.582 14.0938 17.5312C14.0938 18.4805 14.8633 19.25 15.8125 19.25Z" stroke="#A4A6B3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.375 12.375H16.165C16.487 12.375 16.7988 12.262 17.046 12.0557C17.2932 11.8493 17.4602 11.5628 17.5178 11.246L18.5625 5.5H4.125" stroke="#A4A6B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Saved apartments</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/app/dashboard/profile/a/#" exact className="sidebaritem" activeClassName="active">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.82999 8.93745C4.82886 8.12208 4.98911 7.31455 5.30152 6.5614C5.61393 5.80826 6.07231 5.1244 6.65025 4.54923C7.22819 3.97407 7.91425 3.51898 8.66889 3.2102C9.42353 2.90142 10.2318 2.74506 11.0472 2.75012C14.4494 2.77541 17.1708 5.60336 17.1708 9.01512V9.62495C17.1708 12.7029 17.8147 14.4889 18.3819 15.4651C18.443 15.5694 18.4755 15.688 18.4762 15.8089C18.4768 15.9297 18.4456 16.0487 18.3856 16.1536C18.3256 16.2586 18.239 16.3458 18.1345 16.4066C18.0301 16.4675 17.9114 16.4996 17.7905 16.4999H4.20958C4.08868 16.4996 3.97001 16.4674 3.86552 16.4066C3.76104 16.3458 3.67444 16.2585 3.61447 16.1535C3.5545 16.0486 3.52327 15.9296 3.52394 15.8087C3.5246 15.6878 3.55714 15.5693 3.61827 15.465C4.18574 14.4887 4.82999 12.7027 4.82999 9.62495L4.82999 8.93745Z" stroke="#A4A6B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.25 16.5V17.1875C8.25 17.9168 8.53973 18.6163 9.05546 19.132C9.57118 19.6478 10.2707 19.9375 11 19.9375C11.7293 19.9375 12.4288 19.6478 12.9445 19.132C13.4603 18.6163 13.75 17.9168 13.75 17.1875V16.5" stroke="#A4A6B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Notification</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/app/apartment/add" exact className="sidebaritem" activeClassName="active">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1549 3.3L4.62907 11.2658C4.3449 11.5683 4.0699 12.1642 4.0149 12.5767L3.67574 15.5467C3.55657 16.6192 4.32657 17.3525 5.3899 17.1692L8.34157 16.665C8.75407 16.5917 9.33157 16.2892 9.61574 15.9775L17.1416 8.01166C18.4432 6.63666 19.0299 5.06916 17.0041 3.15333C14.9874 1.25583 13.4566 1.925 12.1549 3.3Z" stroke="#A4A6B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.8992 4.62915C11.2933 7.15915 13.3467 9.09332 15.895 9.34998" stroke="#A4A6B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.75 20.1666H19.25" stroke="#A4A6B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>List an apartment</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar

