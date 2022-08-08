import React from "react";
import "./TopBar.css";
import EmailSvg from "./EmailSvg";
import MessageSquareSvg from "./MessageSquareSvg";
import CalenderSvg from "./CalenderSvg";
import CheckSquareSvg from "./CheckSquareSvg";
import StarSvg from './StarSvg'
import Languages from "./Languages";
import DarkMode from "./DarkMode";
import Search from "./Search";
import Cart from "./Cart";
import Notification from "./Notification";
import Profile from "./Profile";
// import {Link} from 'react-router-dom'
import { BrowserRouter , Link } from "react-router-dom";
const TopBar = () => {
  return (
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between align-items-center">
          <div className="bookmark__icons d-flex align-items-center ">
            <ul className="navbar-nav icons">
              <li className="nav-item">
                <Link to="/" className="nav-link tooltip1 bottom" title="Email" > 
                <EmailSvg />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link"> 
                <MessageSquareSvg />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link"> 
                <CalenderSvg />
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/" className="nav-link"> 
                <CheckSquareSvg />
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link text-warning"> 
                <StarSvg/>
                </Link>
              </li>
            </ul>
            
          </div>
          <ul className="icons navbar-nav align-items-center">
            <Languages/>
            <DarkMode/>
            <Search/>
            <Cart/>
            <Notification/>
            <Profile/>
          </ul>
        </nav>
    </BrowserRouter>
  );
};

export default TopBar;
