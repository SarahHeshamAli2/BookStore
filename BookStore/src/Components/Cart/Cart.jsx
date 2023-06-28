import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
export default function Cart() {
    return <>
        <div id="banner">
            <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" >
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>Cart</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item "><Link className=' text-decoration-none' to="/home"> Home</Link></li>
                                <li className="breadcrumb-item">Cart</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div></div>
        <div className="content-inner shop-account">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <div className="table-responsive">
                            <table className="table check-tbl">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>product category</th>
                                        <th>Product name</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th className="text-end">Close</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="product-item-img"><img src={require("../../images/book3.jpg")} alt="" /></td>
                                        <td className="product-item-name">Book</td>
                                        <td className="product-item-name">Battle Drive</td>
                                        <td className="product-item-price">$28.00</td>
                                        <td className="product-item-quantity">
                                            <div className="quantity btn-quantity style-1 me-3">
                                                <div className="input-group bootstrap-touchspin">
                                                    <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: "none" }}></span>
                                                    <input id="demo_vertica12" type="text" value="1" name="demo_vertica12" className="form-control" style={{ display: "block" }} />
                                                    <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: "none" }}>
                                                    </span>
                                                    <span className="input-group-btn-vertical">
                                                        <button className="btn btn-default bootstrap-touchspin-up" type="button">
                                                            <i className="fa-solid fa-plus" id="plus"  ></i>
                                                        </button>
                                                        <button className="btn btn-default bootstrap-touchspin-down" type="button">
                                                            <i className="fa-solid fa-minus" id="minus" ></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="product-item-totle">$28.00</td>
                                        <td className="product-item-close"><Link to="#" className="fa-solid fa-xmark text-white"></Link></td>
                                    </tr>
                                    <tr>
                                        <td className="product-item-img"><img src={require("../../images/book2.jpg")} alt="" /></td>
                                        <td className="product-item-name">Course</td>
                                        <td className="product-item-name">Home</td>
                                        <td className="product-item-price">$28.00</td>
                                        <td className="product-item-quantity">
                                            <div className="quantity btn-quantity style-1 me-3">
                                                <div className="input-group bootstrap-touchspin">
                                                    <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: "none" }}></span>
                                                    <input id="demo_vertica12" type="text" value="1" name="demo_vertica12" className="form-control" style={{ display: "block" }} />
                                                    <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: "none" }}>
                                                    </span>
                                                    <span className="input-group-btn-vertical">
                                                        <button className="btn btn-default bootstrap-touchspin-up" type="button">
                                                            <i className="fa-solid fa-plus" id="plus"  ></i>
                                                        </button>
                                                        <button className="btn btn-default bootstrap-touchspin-down" type="button">
                                                            <i className="fa-solid fa-minus" id="minus" ></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="product-item-totle">$28.00</td>
                                        <td className="product-item-close"><Link to="#" className="fa-solid fa-xmark text-white"></Link></td>
                                    </tr>
                                    <tr>
                                        <td className="product-item-img"><img src={require("../../images/book1.jpg")} alt="" /></td>
                                        <td className="product-item-name">Book</td>
                                        <td className="product-item-name">Such A Fun Age</td>
                                        <td className="product-item-price">$28.00</td>
                                        <td className="product-item-quantity">
                                            <div className="quantity btn-quantity style-1 me-3">
                                                <div className="input-group bootstrap-touchspin">
                                                    <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: "none" }}></span>
                                                    <input id="demo_vertica12" type="text" value="1" name="demo_vertica12" className="form-control" style={{ display: "block" }} />
                                                    <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: "none" }}>
                                                    </span>
                                                    <span className="input-group-btn-vertical">
                                                        <button className="btn btn-default bootstrap-touchspin-up" type="button">
                                                            <i className="fa-solid fa-plus" id="plus"  ></i>
                                                        </button>
                                                        <button className="btn btn-default bootstrap-touchspin-down" type="button">
                                                            <i className="fa-solid fa-minus" id="minus" ></i>
                                                        </button>
                                                    </span>
                                                </div>

                                            </div>
                                        </td>
                                        <td className="product-item-totle">$28.00</td>
                                        <td className="product-item-close"><Link to="#" className="fa-solid fa-xmark text-white"></Link></td>
                                    </tr>
                                    <tr>
                                        <td className="product-item-img"><img src={require("../../images/book5.jpg")} alt="" /></td>
                                        <td className="product-item-name">Course</td>
                                        <td className="product-item-name">Real Life</td>
                                        <td className="product-item-price">$28.00</td>
                                        <td className="product-item-quantity">
                                            <div className="quantity btn-quantity style-1 me-3">
                                                <div className="input-group bootstrap-touchspin">
                                                    <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: "none" }}></span>
                                                    <input id="demo_vertica12" type="text" value="1" name="demo_vertica12" className="form-control" style={{ display: "block" }} />
                                                    <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: "none" }}>
                                                    </span>
                                                    <span className="input-group-btn-vertical">
                                                        <button className="btn btn-default bootstrap-touchspin-up" type="button">
                                                            <i className="fa-solid fa-plus" id="plus"  ></i>
                                                        </button>
                                                        <button className="btn btn-default bootstrap-touchspin-down" type="button">
                                                            <i className="fa-solid fa-minus" id="minus" ></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="product-item-totle">$28.00</td>
                                        <td className="product-item-close"><Link to="#" className="fa-solid fa-xmark text-white"></Link></td>
                                    </tr>
                                    <tr>
                                        <td className="product-item-img"><img src={require("../../images/book6.jpg")} alt="" /></td>
                                        <td className="product-item-name">Book</td>
                                        <td className="product-item-name">Cat Adventure</td>
                                        <td className="product-item-price">$28.00</td>
                                        <td className="product-item-quantity">
                                            <div className="quantity btn-quantity style-1 me-3">
                                                <div className="input-group bootstrap-touchspin">
                                                    <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: "none" }}></span>
                                                    <input id="demo_vertica12" type="text" value="1" name="demo_vertica12" className="form-control" style={{ display: "block" }} />
                                                    <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: "none" }}>
                                                    </span>
                                                    <span className="input-group-btn-vertical">
                                                        <button className="btn btn-default bootstrap-touchspin-up" type="button">
                                                            <i className="fa-solid fa-plus" id="plus"  ></i>
                                                        </button>
                                                        <button className="btn btn-default bootstrap-touchspin-down" type="button">
                                                            <i className="fa-solid fa-minus" id="minus" ></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="product-item-totle">$28.00</td>
                                        <td className="product-item-close"><Link to="#" className="fa-solid fa-xmark text-white"></Link></td>
                                    </tr>
                                    <tr>
                                        <td className="product-item-img"><img src={require("../../images/book4.jpg")} alt="" /></td>
                                        <td className="product-item-name">Book</td>
                                        <td className="product-item-name">Take Out Tango</td>
                                        <td className="product-item-price">$28.00</td>
                                        <td className="product-item-quantity">
                                            <div className="quantity btn-quantity style-1 me-3">
                                                <div className="input-group bootstrap-touchspin">
                                                    <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: "none" }}></span>
                                                    <input id="demo_vertica12" type="text" value="1" name="demo_vertica12" className="form-control"
                                                        data-bts-min="0" data-bts-max="100"

                                                        style={{ display: "block" }} />
                                                    <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: "none" }}>
                                                    </span>
                                                    <span className="input-group-btn-vertical">
                                                        <button className="btn btn-default bootstrap-touchspin-up" type="button">
                                                            <i className="fa-solid fa-plus" id="plus"  ></i>
                                                        </button>
                                                        <button className="btn btn-default bootstrap-touchspin-down" type="button">
                                                            <i className="fa-solid fa-minus" id="minus" ></i>
                                                        </button>
                                                    </span>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="product-item-totle">$28.00</td>
                                        <td className="product-item-close"><Link to="#" className="fa-solid fa-xmark text-white"></Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className="row">

                    <div className="col-lg-12">
                        <div className="widget">
                            <h4 className="widget-title">Cart total</h4>
                            <table className="table-bordered check-tbl m-b25">
                                <tbody>


                                    <tr>
                                        <td>Total</td>
                                        <td>$506.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="form-group m-b25">
                                <Link to="home" className="btn btn-primary btnhover" type="button">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
}
