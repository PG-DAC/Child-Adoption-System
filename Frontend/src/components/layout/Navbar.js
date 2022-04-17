import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark navbar">
      <div className="container-fluid">
      <a className="navbar" href="/">
      <img src="./images/imagesnew/NewLogoModified.png" alt="" height="60" />
        </a>
        <a className="navbar-brand" href="/">
        Vastlya Child Adoption Center
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                <h6>Home</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/testimonial">
              <h6>Testimonials</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/donate">
              <h6>Donate</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/register">
                <h6>Register</h6>
              </NavLink>
            </li>
              <li className="nav-item">
              <NavLink className="nav-link" exact to="/about-us">
                <h6>AboutUs</h6>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact-us">
                <h6>ContactUs</h6>
              </NavLink>
            </li> */}
            </ul>
            </div>
            <div className="container-fluid">
            <ul className="navbar-nav mr-auto justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/login">
                <Button outline color="success">
                  Log-In
                </Button>
              </NavLink>
            </li>
         
          
          
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
