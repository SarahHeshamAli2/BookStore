import React, { useContext, useEffect, useState } from 'react'
import './checkout.css'
import background from '../../images/bg3.jpg';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import $ from "jquery"
import { cartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';



export default function Checkout() {
  let user = {
    name: '',
    phone: '',
  
  }

  const navigate =  useNavigate()
  const {cartId,totalCartPrice,cartItems} = useContext(cartContext)
  const [load, setload] = useState(false)
  useEffect(()=> {stopReload()},[])







  async function checkOut() {
      try {
        setload(true)
        const {data} = await axios.post(`https://booklandstore.onrender.com/api/v1/orders/${cartId}`,{"userId" : localStorage.getItem("userId")},{ headers: {
          Authorization: "Bearer "+ localStorage.getItem("userToken"),
        } })
        console.log(data);
        


        if (data.message = "success") {
          $('.successmsg').fadeIn(500, function () {
            setTimeout(() => {
              $('.successmsg').fadeOut(1000)
            }, 1000);
          });
        }


        if(data.status == "success") {
          $(".succPayment").fadeIn(500,function(){
            setTimeout(() => {
              $(".succPayment").fadeOut(2000)
            }, 500);
            navigate("/orderdone")

          })
        }        setload(false)

      } catch (error) {
        console.log("error",error);
        toast.error("your cart is empty !")
                setload(false)



                $('.errmsg').fadeIn(500, function () {
                  setTimeout(() => {
                    $('.errmsg').fadeOut(500)
                  }, 3000)
                })

      }

  }
  function stopReload() {
    document.querySelector("#myForm").addEventListener("submit",function(e){
      e.preventDefault()
    })
  }
  let formik = useFormik({
    initialValues: user,
    onSubmit: function (values) {
      checkOut(values)
    },
    validate: function (values) {
      let errors = {};
      if (values.name.length < 3) {
        errors.name = 'Name must be more than 3 characters'
      }
      if(values.phone.matches(/^01[0125][0-9]{8}/,"you must enter valid egyptian number"))
    
      return errors
    }
  });
    return <>
    {console.log(cartItems)}
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
                            <table className="table-bordered check-tbl m-b25">
                                <tbody>


                                    <tr>
                                        <td>Total</td>
                                        <td id='totalPrice'>{Math.round(totalCartPrice)} $</td>
                                    </tr>
                                </tbody>
                            </table>
                   
                   <h4 className="widget-title mt-5">Payment </h4>
                   <form onSubmit={formik.handleSubmit}>
                   <div  className="form-group undefined">
                   <label htmlFor="name" className="form-label col">Name *</label>
                    <input
                     id="name"  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} required type="text" className="form-control" placeholder="Name "  />
                    {formik.errors.name && formik.touched.name ? <div className=' alert alert-danger   text-center '> {formik.errors.name}</div> : ''}
                    </div>
                 
              
                    <div className="form-group undefined">
                    <label htmlFor="phone" className="form-label col">Phone *</label>
                        <input id="phone"
                        onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone}
                        type="number" required className="form-control" placeholder="Enter your mobile number" />
                        {formik.errors.phone && formik.touched.phone ? <div className=' alert alert-danger   text-center '> {formik.errors.phone}</div> : ''}
          </div>
                        
                        
                      
                        
                        
                        
                        </form>
                        <div className="form-group">
                          {load ?  <button className='btn  w-25 btn-primary'><i className="fa-solid fa-spinner fa-spin "></i></button> :  <button onClick={checkOut} className="btn btn-primary btnhover" type="button"> Order Now </button> }
                            </div></form></div>

          <div className="succPayment w-50 m-auto text-center" style={{display:"none"}}>
            <div className="alert alert-success">You order has been confirmed</div>
          </div>

    </>
}
