import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import LoadingScreen from '../LoadingScreen/LoadingScreen'
export default function Products() {
  const [allProducts, setAllProducts] = useState(null);
  async function getAllPrducts() {
    try {const { data } = await axios.get('https://booklandstore.onrender.com/api/v1/products')
      setAllProducts(data.data) 
    console.log(data.data);}
    catch (e) {
      console.log("Error: ", e);
    }
  }
  useEffect(function () {
    getAllPrducts()
  }, []);
  return <>
    {allProducts ? <div className="container">
      <div className="row">
        {allProducts.map(function (product, idx) {
          return <div key={idx} className="col-md-3">
            <div className="item">
              <img className="w-100" src={product.imageCover} alt={product.productName} />
              <h3 className="h6 fw-bolder">{product.productName}</h3>
              <p className="text-muted ">{product.price}$</p>
              <span>
                <i className="fas fa-star text-center"></i>{product.ratingsAverage}
              </span>
              <br />
              <Link className="btn  btnhover btnhover2" to=""><button><i className="fa-solid fa-cart-shopping"></i>Add to cart</button></Link>
            </div>
          </div>
        })}
      </div>
    </div> : <LoadingScreen />}

  </>
}