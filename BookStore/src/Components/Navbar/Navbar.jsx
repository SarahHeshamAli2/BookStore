import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import { cartContext } from '../Context/CartContext'
import $ from "jquery"
import CartProvider from '../Context/CartContext';
import axios from 'axios';
export default function Navbar({getUserData,currentUser,logOutAndNavToHome}) {
  const [authorName, setauthorName] = useState(null)
  let navigate = useNavigate()

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


  async function search () {
    const {data} =  await axios.get(`https://booklandstore.onrender.com/api/v1/products`,{params:{
      
    
    "authorName" : $("#searchedWord").val(),
  
  
  
  
  
  
  } })
    
    // await searchWithProName()
    if(data.data.length > 0){
      console.log(data);
      setauthorName(data.data)
      
  
  
    }
    else {
  await searchWithProName()  }
    }
   
    async function searchWithProName() {
      const {data} =  await axios.get(`https://booklandstore.onrender.com/api/v1/products`,{params:{
      
    
  
      "ProductName" : $("#searchedWord").val(),
    
    
    
    
    
    
    } })
      
      console.log(data);
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
        <div className="collapse navbar-collapse row" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 col-md-10">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            

      {currentUser ?        <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </Link>
              <ul className="dropdown-menu dropdown-body mb-5 ">


                <li><Link className="dropdown-item" to="/profile">My profile</Link></li>
                <li><div className="dropdown-divider"></div></li>
                <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                <li><div className="dropdown-divider"></div></li>
                <li><Link className="dropdown-item" to="/products">all Books</Link></li>
                <li><div className="dropdown-divider"></div></li>
                <li><Link className="dropdown-item" to="/productOfCourses">all Courses</Link></li>

              </ul>
            </li> : ""}
            <li className="nav-item">
              <Link className="nav-link " aria-current="false" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="false" to="/contact">Contact Us</Link>
            </li>
     
          <ul>  <div className="header-search-nav  rounded-2 m-auto ">
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
            className='iin'
            />
          <button onClick={function(){search()}} className="btn seabtn" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
         </div>
     
     {/* <div className="searchedResult  w-75" >
      {authorName?.map((auth)=> <><h6>{auth.authorName}</h6>
      <p>{auth.isCourseOrBook}</p>
      <img src={auth.imageCover.slice(76)} alt={auth.productName} style={{width: "50px"}} />
      <p>{auth.price}</p> </>) }
      
     </div> */}
     
    </div></ul>
          </ul>
     
          <ul className=' d-flex m-auto align-items-center col-md-2'>
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
