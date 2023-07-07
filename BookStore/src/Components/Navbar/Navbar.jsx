import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import { cartContext } from '../Context/CartContext'
import $ from "jquery"
import CartProvider from '../Context/CartContext';
import axios from 'axios';
export default function Navbar({getUserData,currentUser,logOutAndNavToHome}) {
  let navigate = useNavigate()
  const {search,authorName} = useContext(cartContext)

  const {getAllPrducts} = useContext(cartContext)
  useEffect(()=>{
    getAllPrducts()
  },[])


  function navigateToBooks() {
    navigate("/products")
  }
  function navigateToCourses() {
    navigate("/productOfCourses")

  }



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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
             <ul className='navbar-nav   mb-lg-0  '>
              <li className="nav-item pt-5">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            

      {currentUser ?        <li className="nav-item dropdown pt-5">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </Link>
              <ul className="dropdown-menu dropdown-body mb-5 pt-5">


                <li><Link className="dropdown-item" to="/profile">My profile</Link></li>
                <li><div className="dropdown-divider"></div></li>
                <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                <li><div className="dropdown-divider"></div></li>
                <li><Link className="dropdown-item" to="/products">all Books</Link></li>
                <li><div className="dropdown-divider"></div></li>
                <li><Link className="dropdown-item" to="/productOfCourses">all Courses</Link></li>

              </ul>
            </li> : ""}
            <li className="nav-item pt-5">
              <Link className="nav-link " aria-current="false" to="/about">About Us</Link>
            </li>
            <li className="nav-item py-5">
              <Link className="nav-link " aria-current="false" to="/contact">Contact Us</Link>
            </li>
                    <div className="header-search-nav  rounded-2 m-auto ms-5">
     <div className="input-group search-input  d-flex" >
     <div className="category">
     <div className="dropdown ">
  <button className="btn btn-secondary dropdown-toggle catsize text-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Choose Category
  </button>
  <ul className="dropdown-menu">
    <li className='cursor-pointer' onClick={navigateToBooks}><a className="dropdown-item">Web development</a></li>
    <li className='cursor-pointer' onClick={navigateToCourses}><a className="dropdown-item" >AI&ML</a></li>
  </ul>
</div>
</div>
<input  id='searchedWord' type="text" 
           aria-label="Text input with dropdown button"
            placeholder="Search Books Here"
            className='iin py-4 mt-2'
            />
            <Link to={"/searchResult"}>          <button onClick={function(){search()}} className="btn seabtn" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
</Link>
         </div>
     

     
    </div>
          
     
   
        </ul>
     
          <ul className=' d-flex m-auto align-items-center '>
            {
              currentUser == null ?  <>          <button type="button" className="btn btn-primary btnhover" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Login
  </button>
            <button type="button" className="btn btn-primary btnhover" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              Sign Up
  </button></> :       <>
   
  <button onClick={logOutAndNavToHome} type="button" className="btn btn-primary btnhover" >
            Log Out

</button>
  
  </>
            }

   
          </ul>
        </div>
      </div>
    </nav>
  </>
}
