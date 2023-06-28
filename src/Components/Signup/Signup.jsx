import axios from 'axios';
import { useFormik } from 'formik';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useRef, useState } from 'react';
import './Signup.css'
import { myPopUp } from '../Context/PopUpContext';

export default function Signup() {
  const {showPopUp} =  useContext(myPopUp)

  let user = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }
  const [loading, setloading] = useState(false)
  let navigate = useNavigate()
  async function signupNewUser(obj) {
    try {
      setloading(true)
      let { data } = await axios.post('https://booklandstore.onrender.com/api/v1/auth/signup', obj)
      console.log(data);
      if (data.message = "success") {
        setloading(false)
        $('.successmsg').fadeIn(500, function () {
          showPopUp()
          setTimeout(() => {
            $('.successmsg').fadeOut(1000)
          }, 1000);
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
      signupNewUser(values)
    },
    validate: function (values) {
      let errors = {};
      if (values.name.length < 3) {
        errors.name = 'Name must be more than 3 characters'
      }
      if (values.email.includes('@') == false || values.email.includes('.com') == false) {
        errors.email = 'Email must be  includes @ and .com';
      }
      if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters'
      }
      if (values.password != values.passwordConfirm) {
        errors.passwordConfirm = 'Password not matched'
      }
      return errors
    }
  });
  return <>
    <div id="sec-overlay" className="sec-overlay">
      <div className="box bg-white">

        <div style={{ 'display': 'none', 'textAlign': 'center' }} className='errmsg alert alert-danger text-center'> Email already in use</div>


        <div style={{ 'display': 'none', 'textAlign': 'center' }} className='successmsg alert  alert-success text-center'> congratulations</div>


        <form className="px-4 py-3" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label col">Username *</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" className="form-control" id="name" placeholder="Your Username" required />
            {formik.errors.name && formik.touched.name ? <div className=' alert alert-danger   text-center '> {formik.errors.name}</div> : ''}
          </div>


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


          <div className="mb-3">
            <label htmlFor="rePassword" className="form-label col ">PASSWORD CONFIRM *</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.passwordConfirm} type="password" className="form-control" id="passwordConfirm" placeholder="Type Password" required />
            {formik.errors.passwordConfirm && formik.touched.passwordConfirm ? <div className=' alert alert-danger   text-center '> {formik.errors.passwordConfirm}</div> : ''}
          </div>
          <div>
            {loading ? <button className='btn  w-25 btn-primary'><i className="fa-solid fa-spinner fa-spin "></i></button> : <button name="submit" type="submit" value="submit" className="btn  w-25 btn-primary btnhover">SIGN UP</button>
            }
          </div>
          Already have an account ? <a className='cursor-pointer' onClick={showPopUp}>Sign In</a>

        </form>
      </div>
    </div>

  </>
}
