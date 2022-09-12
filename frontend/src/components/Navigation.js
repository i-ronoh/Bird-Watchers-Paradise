import React from 'react'
import "./navigation.css"
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar">
        <div className = "navbar-item-left">
            <ul className="nav-menu">
                <li className="nav-menu-item" >
                    <Link className="link" to="/">-BWP-</Link>
                </li>
            </ul>
        </div>
        <div className = "navbar-item-right">
            <ul className="nav-menu">
            <li className="nav-menu-item" >
                <Link className="link" to="/">HOME |</Link>
            </li>
            <li className="nav-menu-item" >
                <Link className="link"  to="/birds">BIRD-LOG |</Link> 
            </li>
            <li className="nav-menu-item">
                <Link className="link" to="/gallery">GALLERY</Link>
            </li>
            </ul>
        </div>
      </div>
)};

export default Navigation;