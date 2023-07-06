import BestSellerCourse from "../Bestseller/BestSellerCourse";
import BestSellerBook from "../Bestseller/BestSellerBook";
import './Home.css'
import {React,useState,useEffect,useContext} from "react";
import axios from 'axios'
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import '../AllBookorCourses/Products.css'
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext";
import RecommendBook from "../Recommend/RecommendBook";
import RecommendCourse from "../Recommend/RecommendCourse";
export default function Home() {
  const {addToCart,getAllPrducts,allProducts} = useContext(cartContext)

  const [BestSeller, setBestSeller]=useState([])
  const [load,setLoad] = useState(false)

  async function getBestSeller(){
  setLoad(true)
  let{data}=await axios.get(`https://booklandstore.onrender.com/bestseller/bestbooks`)
  setBestSeller(data);
  console.log(data.data);
  setLoad(false)
  }
  useEffect(()=>{
  getBestSeller();
  },[])
  return (
    <> 
    {load ? <LoadingScreen/>  :<> <div className="home  mt-2  d-flex justify-content-center">
        <img src={require('../../images/bg1.jpg')} alt="" />
        <div className="w-75 m-auto content mt-5">
          <div className="row">
            <div className="col-md-6  mt-5 font1">
              <h1>Bookland </h1>
              <p>E-book store & courses</p>
              <div className="border-right">
                <p>
                  Today a learner ... Tomorrow <br />a leader{" "}
                </p>
                
              </div>
            </div>
            <div className="col-md-6 font2">
              <div className="layout">
                <img src={require('../../images/home-img.png')} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {localStorage.getItem("profile") ? <> <RecommendBook/> <RecommendCourse/></> : <>   <section className="recommend-books py-5">
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
            </section>
      <BestSellerCourse /> </>}

  
      </>}

    </>
  );
}
