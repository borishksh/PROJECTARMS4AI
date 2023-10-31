import React, { Component } from 'react'
import logo from '../assets/footer-logo 2.png'
import {FaAlignRight} from 'react-icons/fa'
import { NavLink  } from "react-router-dom";
import './nav.css';

export default class 
Navbar extends Component {
    state = {
        isOpen: false
        };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
  render() {
    return (
      <nav className="navbar" id='nav-bar'>
        <div className="nav-center">
          <div className="nav-header">
            <NavLink to="/" className='nav-title'>
              <img src={logo} alt="Arms4AI"/>
            </NavLink>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
            <li>
              <NavLink to="/" className="activeLink" onClick={this.handleToggle}><div>Home</div></NavLink>
            </li>
            <li>
              <NavLink to="/about" className="activeLink" onClick={this.handleToggle}><div>About</div></NavLink>
            </li>
            <li>
              <NavLink to="/product" className="activeLink" onClick={this.handleToggle}><div>Product</div></NavLink>
            </li>
            <li>
              <NavLink to="/industry" className="activeLink" onClick={this.handleToggle}><div>Industry verticals</div></NavLink>
            </li>
            <li>
              <NavLink to="/resources" className="activeLink" onClick={this.handleToggle}><div>Resources</div></NavLink>
            </li>
          </ul>
          <NavLink to="/contact"><div className="pre-register">Contact us</div></NavLink>
        </div>
      </nav>
    )
  }
}
