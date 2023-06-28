import { Link } from 'react-router-dom';
import './contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function Contact() {


    const [isLoading, setIsLoading] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs.sendForm('service_nlt5oy4', 'template_k6a2ewn', form.current, 'uMDPvpUSJS9pBvw5V')
            .then((result) => {
                toast.success("Your response is sent successfully!  ", {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                })
                setIsLoading(false)

            }

                , (error) => {

                    toast.error("Something Went Wrong , please try again")
                    setIsLoading(false)


                });
    };






    return <>
        <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" >
            <div className="container">
                <div className="dz-bnr-inr-entry">
                    <h1>Contact</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home"> Home</Link></li>
                            <li className="breadcrumb-item">Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div className="content-inner-2 pt-0">
            <div className="map-iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13812.962891368175!2d31.32590246938569!3d30.058633632015685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e572adea30f%3A0x72a02ea65574bafc!2z2KzYp9mF2LnYqSDYp9mE2KPYstmH2LHYjCDZhdiv2YrZhtipINmG2LXYsdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1677853424050!5m2!1sar!2seg" width="100%" height="450px" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
            </div>
        </div>

        <section className="contact-wraper1" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contact-info ms-md-5">
                            <h3 className="title text-white icon-bx-wraper m-b30 icon-content fs-1 fw-normal ms-md-4">Get In Touch</h3>

                            <ul className="no-margin">

                                <li className="icon-bx-wraper text-white left m-b30">
                                    <div className="icon-md">
                                        <span className="icon-cell text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-tilte text-white">Our Email</h5>
                                        <p>BooksLand126@gmail.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 m-b40  ">
                        <div className="contact-area1 m-r20 m-md-r0 ">
                            <div className="section-head style-1 ">
                                <h6 className="sub-title text-primary ">CONTACT US</h6>
                                <h3 className="title m-b20 ">Get In Touch With Us</h3>
                            </div>
                            <form ref={form} onSubmit={sendEmail} className="dz-form dzForm" method="POST" action="script/contact_smtp.php">
                                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                <div className="dzFormMsg"></div>
                                <div className="input-group">
                                    <input required type="text" className="form-control" name="from_name" placeholder="Full Name" />
                                </div>
                                <div className="input-group">
                                    <input required type="text" className="form-control" name="email" placeholder="Email Adress" />
                                </div>
                                <div className="input-group">
                                    <input required type="text" className="form-control" name="phone" placeholder="Phone No." />
                                </div>

                                <div className="input-group">
                                    <textarea required name="message" rows="5" className="form-control" placeholder='Message'></textarea>
                                </div>
                                <div className="mb-3">
                                    <div className="g-recaptcha" data-sitekey="6Le3284kAAAAAKATxtdUQWYKHhl7AE_5F-wbXZjP" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                    <input className="form-control d-none" style={{ display: "flex" }} data-recaptcha="true" data-error="Please complete the Captcha" />
                                </div>

                                <div>
                                    {isLoading ? <button className='btn  w-100 btn-primary'><i className="fa-solid fa-spinner fa-spin "></i></button> : <button name="submit" type="submit" value="submit" className="btn  w-100 btn-primary btnhover">SUBMIT</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
