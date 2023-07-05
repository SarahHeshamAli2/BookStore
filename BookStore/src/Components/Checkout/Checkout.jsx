import React, { useContext, useEffect, useState } from 'react'
import './checkout.css'
import background from '../../images/bg3.jpg';
import { Link } from "react-router-dom";
import axios from 'axios';
import $ from "jquery"
import { cartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';

export default function Checkout() {
  const {cartId} = useContext(cartContext)
  const [load, setload] = useState(false)
  useEffect(()=> {stopReload()},[])
  async function checkOut() {
      try {
        setload(true)
        const {data} = await axios.post(`https://booklandstore.onrender.com/api/v1/orders/${cartId}`,{"userId" : localStorage.getItem("userId")},{ headers: {
          Authorization: "Bearer "+ localStorage.getItem("userToken"),
        } })
        console.log(data);
        if(data.status == "success") {
          $(".succPayment").fadeIn(500,function(){
            setTimeout(() => {
              $(".succPayment").fadeOut(2000)
            }, 500);
          })
        }        setload(false)

      } catch (error) {
        console.log("error",error);
        toast.error("your cart is empty !")
                setload(false)

      }

  }
  function stopReload() {
    document.querySelector("#myForm").addEventListener("submit",function(e){
      e.preventDefault()
    })
  }
  
    return <>
    {console.log(cartId)}
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
            <form id='myForm' className="shop-form widget" >
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
                   <div  className="form-group undefined"><input required type="text" className="form-control" placeholder="Name " /></div>
                 
                   <div className="form-group undefined">
                    <input type="text" className="form-control" placeholder="Enter your address"  required/></div>
                    <div className="form-group undefined">
                        <input type="number" required className="form-control" placeholder="Enter your mobile number" /></div>
                        <div className="form-group">
                          {load ?  <button className='btn  w-25 btn-primary'><i className="fa-solid fa-spinner fa-spin "></i></button> :  <button onClick={checkOut} className="btn btn-primary btnhover" type="button"> Order Now </button> }
                            </div></form></div>

          <div className="succPayment w-50 m-auto text-center" style={{display:"none"}}>
            <div className="alert alert-success">You order has been confirmed</div>
          </div>

    </>
}
