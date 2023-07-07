//Products component
import axios, { all } from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import $ from "jquery"

import { cartContext } from "../Context/CartContext";
export default function SearchedResult(){
    const {addToCart, search,   authorName 
} = useContext(cartContext)


 
useEffect(()=>{  
search ()},[authorName])


    return<>
    {console.log(authorName)}
 { authorName ?      <div className="container fetProducts">
      <div className="row">
      <h2 className="text-center my-5">Search Result</h2>

    {authorName?.map((auth)=>     
      <div className="col-md-3 pt-5  mb-5">
        <div>

      <div className="item">
          <Link  to= {`/ShowCourses/${auth._id}`}>
          <img src={auth.imageCover.slice(76)} alt={auth.productName} />
           <h3 className="h6 fw-bolder text-center pt-3">
              {auth.authorName.slice(0,auth.authorName.indexOf('',26))}</h3>
              <h5> {auth.productName.slice(0,auth.productName.indexOf('',26))}</h5>
              <p className=" text-center text-muted ">{auth.price}$</p>
               <span className=" text-center">
                <i className="fas fa-star"></i>{auth.ratingsAverage}
                </span>
          </Link>
                <br/>
               <div className="text-center"> 
               <div onClick={function(){addToCart(auth._id)}} className="btn btnhover btnhover2 text-white" to=""><i className="flaticon-shopping-cart-1  fa-solid fa-cart-shopping text-white"></i>   Add to cart<i/></div>
               </div>
             
      </div>

      </div>
  
  </div>  )}

    </div>
</div> : <LoadingScreen/>} 
        
 
</>
}
