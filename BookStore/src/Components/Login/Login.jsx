import axios from 'axios';
import { useFormik } from 'formik';
import $ from 'jquery';
import { useNavigate, Link } from 'react-router-dom';
import React, { useContext, useRef, useState } from 'react';
import './Login.css'
import { myPopUp } from '../Context/PopUpContext';


export default function Login({getUserData}) {
  const {hidePopUp,showSignUpPopUp} =  useContext(myPopUp)

  let user = {
    email: '',
    password: '',
  }
  const [loading, setloading] = useState(false)
  let navigate = useNavigate()
  async function loginNewUser(obj) {
    try {
      setloading(true)
      let { data } = await axios.post('https://booklandstore.onrender.com/api/v1/auth/login', obj)
      console.log(data.data);
      if (data.message = "success") {
        localStorage.setItem("userToken",data.token)
        localStorage.setItem("userName",data.data.name)
        localStorage.setItem("userEmail",data.data.email)

        getUserData()
        setloading(false)
        $('.successmsg').fadeIn(500, function () {
          hidePopUp()
          setTimeout(() => {
            $('.successmsg').fadeOut(1000)
          }, 200);
          navigate('/profile')
        });
      }



    }
    catch (err) {
      console.log(err)
      setloading(false)
      $('.errmsg').fadeIn(500, function () {
        setTimeout(() => {
          $('.errmsg').fadeOut(500)
        }, 3000)
      })
    }
  }



  let formik = useFormik({
    initialValues: user,
    onSubmit: function (values) {
      loginNewUser(values)
    },
    validate: function (values) {
      let errors = {};
  
      if (values.email.includes('@') == false || values.email.includes('.com') == false) {
        errors.email = 'Email must be  includes @ and .com';
      }
      if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters'
      }
   
      return errors
    }
  });
  return <>
    <div id="sec-overlay" className="sec-overlay">
      <div className="box bg-white">

        <div style={{ 'display': 'none', 'textAlign': 'center' }} className='errmsg alert alert-danger text-center'> Email or password uncorrect</div>


        <div style={{ 'display': 'none', 'textAlign': 'center' }} className='successmsg alert  alert-success text-center'> congratulations</div>


        <form className="px-4 py-3" onSubmit={formik.handleSubmit}>
          

          <div className="mb-3">
            <label htmlFor="email" className="form-label col">E-MAIL *</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control" id="email" placeholder="Your Email id" required />
            {formik.errors.email && formik.touched.email ? <div className=' alert alert-danger   text-center '> {formik.errors.email}</div> : ''}
          </div>



          <div className="mb-3">
            <label htmlFor="password" className="form-label col">PASSWORD *</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" className="form-control" id="password" placeholder="Type Password" required />
            {formik.errors.password && formik.touched.password ? <div className=' alert alert-danger   text-center '> {formik.errors.password}</div> : ''}
          </div>

          <div>
            {loading ? <button className='btn  w-25 btn-primary'><i className="fa-solid fa-spinner fa-spin "></i></button> : <button name="submit" type="submit" value="submit" className="btn  w-25 btn-primary btnhover">Login</button>
            }
          </div>

        </form>
        <div className="dropdown-item mb-3 px-4 " to="/Signup">if You don't have an account with us, <Link onClick={showSignUpPopUp} className='cursor-pointer'>SignUp</Link></div>
        <Link className="dropdown-item mb-3 px-4 " to="/Contact">Forgot password?</Link>
      </div>
    </div>

  </>
}