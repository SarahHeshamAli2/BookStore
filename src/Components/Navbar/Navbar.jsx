import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

export default function Navbar({getUserData}) {
  return <>
  
<div className="modal fade stylish" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">LOGIN</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <Login getUserData={getUserData}/>
      </div>
   
    </div>
  </div>
</div>
<div className="modal fade stoto" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">SIGN UP</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <Signup/>
      </div>
   
    </div>
  </div>
</div>



    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </Link>
              <ul className="dropdown-menu">


                <li><Link className="dropdown-item" to="/profile">My profile</Link></li>
                <li><div className="dropdown-divider"></div></li>
                <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                <li><div className="dropdown-divider"></div></li>
                <li><Link className="dropdown-item" to="/products">all prouduct</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="false" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="false" to="/contact">Contact Us</Link>
            </li>

          </ul>
          <ul className=' d-flex m-auto'>
          <button type="button" className="btn btn-primary btnhover" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Login
</button>
          <button type="button" className="btn btn-primary btnhover" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            Sign Up
</button>
            {/* <li className='nav-item text-decoration-none list-unstyled '> <Link className=' btn btn-primary btnhover ms-2' to='/login'>Login </Link> </li> */}
            {/* <li className='nav-item text-decoration-none list-unstyled'>  <Link className='btn btn-primary btnhover  ' to='/signup'>Sign Up </Link> </li> */}
          </ul>
        </div>
      </div>
    </nav>
  </>
}
