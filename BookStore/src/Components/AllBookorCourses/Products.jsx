//Products component
import axios, { all } from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import './Products.css'
import $ from "jquery"

import { cartContext } from "../Context/CartContext";
export default function Products(){
    const {addToCart,getAllPrducts,allProducts} = useContext(cartContext)
    const [visible, setVisible] = useState(4)


    function scrollUp () {

      $("html, body").animate({
        scrollTop: $(".fetProducts").offset().top
    }, 500);  
    }
    
    useEffect(function(){
        getAllPrducts()
    },[]);

    const showMoreItems = () => {
        setVisible((prevValue)=> prevValue*4)
        
      }
  
      const displayProducts= allProducts?.slice(0,visible)?.map(function(product, idx){
        return product.isCourseOrBook === "Book" ?  <div key={ idx } className="col-md-3 pt-5  mb-5">
        <div>

      <div className="item">
          <Link  to= {`/Showbook/${product._id}`}>
          <img src={product.imageCover.slice(19)} alt={product.productName} />
           <h3 className="h6 fw-bolder text-center pt-3">
              {product.productName.slice(0,product.productName.indexOf('',30))}</h3>
              <p className=" text-center text-muted ">{product.price}$</p>
               <span className=" text-center">
                <i className="fas fa-star"></i>{product.ratingsAverage}
                </span>
          </Link>
                <br/>
               <div className="text-center"> 
               <div onClick={function(){addToCart(product._id)}} className="btn btnhover btnhover2 text-white" to=""><i className="flaticon-shopping-cart-1  fa-solid fa-cart-shopping text-white"></i>   Add to cart<i/></div>
               </div>
             
      </div>

      </div>
  
  </div> : ""  })
    return<>
     {allProducts? <div className="container fetProducts">
      <div className="row">
      <h2 className="text-center my-5 test">Books At Bookland</h2>
 {displayProducts}   
 {console.log(allProducts?.length,visible)}

      {visible !== allProducts.length ?     <button onClick={showMoreItems} className='btn btn-primary  w-50 m-auto mt-4'>Load More</button>
 : <><i onClick={scrollUp} className="fa-solid fa-circle-up fs-3 text-center mt-5 text-primary cursor-pointer "></i></>}
    </div>
</div> :<LoadingScreen /> } 
        
 
</>
}
