import React from "react";
import BestSellerCourse from "../Bestseller/BestSellerCourse";
import BestSellerBook from "../Bestseller/BestSellerBook";
import './Home.css'
export default function Home() {
  return (
    <>
      <div className="home  mt-2  d-flex justify-content-center">
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
      <BestSellerBook/>
      <BestSellerCourse />
    </>
  );
}
