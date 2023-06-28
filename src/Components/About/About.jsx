import React from 'react'
import { Link } from 'react-router-dom';
import  ReactDOM  from 'react-dom/client';
import background from '../../images/bg3.jpg';
import './about.css'
export default function About() {
  return <>
    <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{backgroundImage:
    `${process.env.PUBLIC_URL+ background})`}}>
      <div className="container">
        <div className="dz-bnr-inr-entry">
          <h1>About us</h1>
          <nav aria-label="breadcrumb" className="breadcrumb-row">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/home"> Home</Link></li>
              <li className="breadcrumb-item">About us</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <section className="content-inner overlay-white-middle ">
      <div className="container">
        <div className="row about-style1 align-items-center">
          <div className="col-lg-6 m-b30">
            <div className="row sp10 about-thumb">
              <div className="col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <div className="split-box w-75 ms-md-5">
                  <div>
                    <img className="m-b30 ms-md-3" src={require("../../images/about1.jpg")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="split-box w-75 ">
                  <div>
                    <img className="m-b20 aos-item" src={require("../../images/about2.jpg")} alt="" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" />
                  </div>
                </div>
                <div className="exp-bx aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                  <div className="exp-info">
                    <ul className="list-check primary" >
                      <li>Book</li>
                      <li>Courses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-b30 aos-item " data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            <div className="about-content px-lg-4 ">
              <div className="section-head style-1  ">
                <h2 className="title fw-bolder">Bookland Is Best Choice For Learners</h2>
                <p> We show you all your  interesting e-books and e-courses, perfect for your modern life. Our mission is to bring the power of reading into your world Because we believe that reading shapes our identity, and that courses can improve and change the world around us.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="content-inner-1 bg-light">
      <div className="container">
        <div className="section-head text-center ">
          <h2 className="title">Our Mission</h2>
          <p className="px-5">Providing e-books and e-courses sales  with the ability to save them and modify them at any time when needed.</p>
        </div>
        <div className="row ">
          <div className=" col-md-12 ms-md-5 ">
            <div className="icon-bx-wraper style-3 m-b30  ms-md-5 ">

              <div className="icon-content  ">
                <h4 className="title "><i className="fa-solid fa-book-open-reader fa-lg"></i> Best Bookstore</h4>
                <p> E-books and e-courses save time, money and scalability...</p>
                <p> By reading online, readers can access content anywhere, anytime and can't access it.</p>
                <p> They need time off from their jobs to attend classes.</p>
                <p> Cost less.</p>
                <p>Can be developed and modified over time.</p>
                <p>Payment can be made in cash or through points.</p>
               
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
}
