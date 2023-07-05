import {React,useState,useEffect,useContext} from "react";
import axios from 'axios'
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import '../AllBookorCourses/Products.css'
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext";

// import { data } from "jquery";
export default function BestSellerBook() {
  const {addToCart,getAllPrducts,allProducts} = useContext(cartContext)

  const [BestSeller, setBestSeller]=useState([])
  async function getBestSeller(){

  let{data}=await axios.get(`https://booklandstore.onrender.com/bestseller/bestbooks`)
  setBestSeller(data);
  console.log(data.data);
  }
  useEffect(()=>{
  getBestSeller();
  },[])
 
return  <>
      {BestSeller? <section className="recommend-books py-5">
        <div className="container">
         <div className="row">
         <div className="section-head text-center">
         <h2>Best Selling Books</h2>
         </div>
         <div className="section-content d-flex "> 
    { BestSeller.map(function(product, idx){
      return product.isCourseOrBook === "Book"?
    <div key={idx} className="col-md-3">
           <div>

<div className="item text-center  ">
    <Link  to= {`/Showbook/${product._id}`}>
    <img src={product.imageCover.slice(76)} alt={product.productName} />
     <h3 className="h6 fw-bolder text-center pt-3">
        {product.productName.slice(0,product.productName.indexOf('',25))}</h3>
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
            </div>:"" 
})}   
                </div>
            </div>
            </div>
            <div className="text-center"> 
         <Link  className="btn btnhover btnhover2 text-white w-25 mt-5" to="/Products"><i className="flaticon-shopping-cart-1  fa-solid fa-cart-shopping text-white"></i>   Go To All Books<i/></Link>
         </div>
            </section> : <LoadingScreen /> } 
    </>
}
