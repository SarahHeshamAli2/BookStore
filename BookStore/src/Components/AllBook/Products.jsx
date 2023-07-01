//Products component
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import './Products.css'
import { cartContext } from "../Context/CartContext";
export default function Products(){
    const {addToCart} = useContext(cartContext)

    const [allProducts , setAllProducts]=useState(null);

    async function getAllPrducts(){

       try{
        const {data} =await axios.get('https://booklandstore.onrender.com/api/v1/products')
       
        setAllProducts(data.data)
    }
       catch(e){
        console.log("Error: ",e);
       }
    }

    useEffect(function(){
        getAllPrducts()
    },[]);

    return<>
     {allProducts? <div className="container">
      <div className="row">
      <h2 className="text-center my-5">Books At Bookland</h2>
        {allProducts.map(function(product, idx){
            return <div key={ idx } className="col-md-3 pt-5  mb-5">
              <div>
            <div className="item">
                <Link  to= {`/Showbook/${product._id}`}>
                <img src={product.imageCover} alt={product.productName} />
                 <h3 className="h6 fw-bolder text-center pt-3">{product.productName}</h3>
                    <p className=" text-center text-muted ">{product.price}$</p>
                     <span className=" text-center">
                      <i className="fas fa-star"></i>{product.ratingsAverage}
                      </span>
                </Link>
                      <br/>
                     <div className="text-center"> 
                     <div onClick={function(){addToCart(product._id)}} className="btn btnhover btnhover2" to=""><button  className="addBtn p-2 border rounded-2"><i className="fa-solid fa-cart-shopping"></i>   Add to cart</button></div>
                     </div>
            </div>
            </div>
        </div>})}
    </div>
</div> :<LoadingScreen/> } 
 
</>
}

