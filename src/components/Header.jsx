import React from "react";
import logoImg from '../assets/static/logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{
    background: "linear-gradient(to right, #fdc830, #f37335)"
  }}>
        <div className="container-fluid">
          <div className="mx-3">
            <img src={logoImg} style={{width:'70px'}}/>
          </div>
          <Link to='/' className="navbar-brand text-white fs-4" >
            Indian Rock Cafe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto custom-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link active text-white fs-5 " aria-current="page" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link text-white fs-5" >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/menu' className="nav-link text-white fs-5" >
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link text-white fs-5" >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
