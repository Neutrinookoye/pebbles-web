import React, { useState } from "react";
import "../homepage/css/navBar.css";
import Button from "../homepage/Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../img/Logo-new.svg";
import { Link } from "react-router-dom";
import NavbarDropdown from "../navbarDropdown/NavbarDropdown";

const NavBar = ({ openLoginModal }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className='nav-bar'>
      <div className='nav-bar-wrapper'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>

        <div className='nav-links'>
          <Link to='/become-host'>
            <Button text='Become a Host'></Button>
          </Link>
          <FontAwesomeIcon
            onClick={() => setDropdown(!dropdown)}
            className='menu-toggle'
            icon={faBars}
          />
          {dropdown && (
            <div className='nav__dropdown'>
              <NavbarDropdown
                toggleDropdown={toggleDropdown}
                openLoginModal={openLoginModal}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
