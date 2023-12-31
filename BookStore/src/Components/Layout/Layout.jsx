import React, { useContext, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import ScrollToTop from "react-scroll-to-top";

import ReactDOM from 'react-dom';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Layout.css'
import $ from "jquery"
import CartProvider from '../Context/CartContext';
import axios from 'axios';

export default function Layout({getUserData,currentUser,logOut}) {

  const [authorName, setauthorName] = useState(null)


  let navigate = useNavigate()

  function logOutAndNavToHome() {

    logOut()
    navigate("/home")

  }


  
  return <>
    <header className="site-header header style-1">
  
    <div className="header-info-bar row ">
      <div className="container clearfix mo-left  d-flex">
        <div className="logo-header logo-dark ms-md-5 col-lg-6">
          <Link to="/home"><img src={require('../../images/logo1.png')} alt="logo" /></Link>
        </div>
    
    {currentUser ? 
        <div className="extra-nav  col-lg-6 m-auto ">
          <div className="extra-cell">
            <ul className="navbar-nav header-right mx-5">
              <li className="nav-item dropdown profile-dropdown mx-5">
                <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                 
                  <div className="profile-info mx-5">
                    <h6 className="title">{localStorage.getItem("userName")}</h6>
                    <span className='copyright-text '>{localStorage.getItem("userEmail")}</span>
                  </div>
                </Link>
                <div className="dropdown-menu py-0 dropdown-menu-end">
                  <div className="dropdown-header">
                    <h6 className="m-0">{localStorage.getItem("userName")}</h6>
                    <span>{localStorage.getItem("userEmail")}</span>
                  </div>
                  <div className="dropdown-body">
                    <Link to="/profile"
                      className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"
                          fill="#000000">
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <span className="ms-2">Profile</span>
                      </div>
                    </Link>
                    <Link to="/allorder" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"
                          fill="#000000">
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                        <span className="ms-2">My Order</span>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-footer">
                    <Link onClick={logOutAndNavToHome} className="btn btn-primary w-100 btnhover btn-sm" to="/home">Log Out</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div> : ""}
      </div>
    </div>
  </header>
 
  <Navbar getUserData={getUserData} logOutAndNavToHome={logOutAndNavToHome} currentUser={currentUser}/>
  <Outlet />

  <div className="footer-bottom">
      <div className="container">
        <div className="row fb-inner">
          <div className="col-lg-6 col-md-12 text-start">
            <p className="copyright-text">
              Bookland e-Book and Courses Store Ecommerce Website - © 2023
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <div style={{  color:"white" }} />
      <ScrollToTop smooth className="scroltop" />
    </div>
  </>
}

