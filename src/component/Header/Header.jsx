import React, { useState, useEffect } from 'react'
import './Header.css'
import netflix from '../assets/images/logo1.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header_outer_container ${show && 'nav_black'}`}>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={netflix} alt="netflix" width="100" />
            </li>
            <li className="home-link">Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li className="search-icon">
              <SearchIcon />
            </li>
            <li className="notification-icon">
              <NotificationsNoneIcon />
            </li>
            <li className="account-icon">
              <AccountBoxIcon />
            </li>
            <li className="dropdown-icon">
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header