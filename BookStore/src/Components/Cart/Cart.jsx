import React, { useContext, useEffect } from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { cartContext } from '../Context/CartContext'
import $ from "jquery"
import EmptyCart from '../EmptyCart/EmptyCart'
export default function Cart() {

    const { getCartProds, cartItems, totalCartPrice, updateCartItemsQuantity,clearCart } = useContext(cartContext)
    useEffect(() => {
        getCartProds()
    },[])
    function updateTotalCartPrice() {

        $("#totalPrice").text(Math.round(totalCartPrice)+"$")
    }
    
    return <>
  {cartItems == null ? <EmptyCart/>: <>      <div id="banner my-5 py-5">
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
                                        <th className="text-end"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems?.map((cartItem, ind) => <tr key={ind}>
                                        <td className="product-item-img"><img src={require("../../images/book3.jpg")} alt="" /></td>
                                        <td className="product-item-">Book</td>
                                        <td className="product-item-name">Battle Drive</td>
                                        <td className="product-item-price">${Math.round(cartItem.price)}</td>
                                        <td className="product-item-quantity">
                                            <div className="quantity btn-quantity style-1 me-3">
                                                <div className="input-group bootstrap-touchspin">
                                                    <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: "none" }}></span>
                                                    <input id="demo_vertica12" type="number" value={cartItem.quantity} name="demo_vertica12" className="form-control text-center" style={{ display: "block" }} />
                                                    <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: "none" }}>
                                                    </span>
                                                    <span className="input-group-btn-vertical">
                                                        <button onClick={function () { updateCartItemsQuantity(cartItem._id, cartItem.quantity + 1) }} className="btn btn-default bootstrap-touchspin-up" type="button">
                                                            <i className="fa-solid fa-plus" id="plus"  ></i>
                                                        </button>
                                                        {cartItem.quantity <= 1 ? <button disabled className="btn btn-default bootstrap-touchspin-down" type="button">
                                                            <i className="fa-solid fa-minus" id="minus" ></i>
                                                        </button> : <button onClick={function () { updateCartItemsQuantity(cartItem._id, cartItem.quantity - 1) }} className="btn btn-default bootstrap-touchspin-down" type="button">
                                                            <i className="fa-solid fa-minus" id="minus" ></i>
                                                        </button>}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="product-item-totle">${Math.round(cartItem.price)}</td>
                                        <td className="product-item-close"><Link to="#" className="fa-solid fa-xmark text-white"></Link></td>
                                    </tr>)}


                                </tbody>
                                
                            </table>
                            <button onClick={updateTotalCartPrice} className='btn btn-primary btnhover'>Update Cart</button>
                            <button onClick={clearCart} className='btn btn-outline-danger mx-2 '>Clear Cart</button>
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
                                        <td id='totalPrice'>0$</td>
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
 </>}

    </>
}
