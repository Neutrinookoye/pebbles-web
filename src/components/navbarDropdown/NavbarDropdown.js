import React from "react";
import { Link } from "react-router-dom";
import './navbarDropdown.scss'

const NavbarDropdown = ({toggleDropdown, openLoginModal}) => {
  return (
    <div className='navbarDropdown__wrapper'>
      <ul>
        <li>
          <Link onClick={() => toggleDropdown()} to='/'>My Apartments</Link>
        </li>
        <li>
          <Link onClick={() => toggleDropdown()} to='/'>List an Apartment</Link>
        </li>
        <li>
          <Link onClick={() => toggleDropdown()} to='/'>My Dashboard</Link>
        </li>
        <li>
          <Link onClick={() => {
            openLoginModal()
            toggleDropdown()
            }} to='#/'>Login</Link>
        </li>
        <li>
          <Link onClick={() => toggleDropdown()} to='/signup'>Sign Up</Link>
        </li>
        <li>
          <Link onClick={() => toggleDropdown()} to='/'>Contact us</Link>
        </li>
        <li>
          <Link onClick={() => toggleDropdown()} to='/'>Sign Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDropdown;
