import React from 'react'
import './checkout.css'
import background from '../../images/bg3.jpg';
import { Link } from "react-router-dom";

export default function Checkout() {
    return <>
     <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{backgroundImage:
    `${process.env.PUBLIC_URL+ background})`}}>
      <div className="container">
        <div className="dz-bnr-inr-entry">
          <h1>CheckOut</h1>
          <nav aria-label="breadcrumb" className="breadcrumb-row">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/home"> Home</Link></li>
              <li className="breadcrumb-item">Checkout</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
        <div className=" container col-lg-8  mt-5 ">
            <form className="shop-form widget">
                <h4 className="widget-title mt-5">Order Total</h4>
                     <table classNameName="table-bordered check-tbl m-b25">
                                <tbody>


                                    <tr>
                                        <td>Total</td>
                                        <td id='totalPrice'>0$</td>
                                    </tr>
                                </tbody>
                            </table>
                   
                   
                   <h4 className="widget-title mt-5">Payment </h4>
                   <div className="form-group undefined"><input type="text" className="form-control" placeholder="Name " /></div>
                   <div className="form-group"><select aria-label="Credit Card Type" className="form-select">
                    <option>Credit Card Type</option>
                   <option value="1">Cashback credit cards</option>
                   <option value="2">Travel credit cards.</option>
                   <option value="3">Business credit cards</option>
                   </select>
                   </div>
                   <div className="form-group undefined">
                    <input type="text" className="form-control" placeholder="Credit Card Number" /></div>
                    <div className="form-group undefined">
                        <input type="text" className="form-control" placeholder="Card Verification Number" /></div>
                        <div className="form-group">
                            <button className="btn btn-primary btnhover" type="button"> Order Now </button></div></form></div>



    </>
}
