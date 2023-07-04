import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import './profile.css'
import { cartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';
export default function Profile() {
	useEffect(()=>{getAllPrducts()},[])



	let options = [
			
		{ label: "web development", value: "web development" },
		{ label: "AI", value: "AI" },
		{ label: "JavaScript", value: "JavaScript" },
	  ];
	 



		const [selected, setSelected] = useState([]);
		const {getAllPrducts,allProducts,catgegory} = useContext(cartContext)
	const userName = localStorage.getItem("userName")
	return <>
	
		<div className="  bg-white">
			<div className="content-block">
				<section className="content-inner bg-white">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-4 m-b30">
								<div className="sticky-top">
									<div className="shop-account">
										<div className="account-detail text-center">
											<div className="my-image">
												<Link to="#">
													<img src={require("../../images/blank-profile-picture-973460_128.jpg")} alt="" />
												</Link>
											</div>
											<div className="account-title">
												<div className="">
													<h2 className="m-b5 "><Link to="#" className='text-decoration-none ss'>{userName}</Link></h2>
												</div>
											</div>
										</div>
										<ul className="account-list">
											<li>
												<Link to="/profile" className="active text-decoration-none">
													<i className="far fa-user" aria-hidden="true"></i>
													<span>Profile</span></Link>
											</li>
											<li>
												<Link to="/cart" className=' text-decoration-none'><i className="flaticon-shopping-cart"></i>
													<span>My Cart</span></Link>
											</li>
											<li>
												<Link to="/shop" className='text-decoration-none'><i className="fa fa-briefcase" aria-hidden="true"></i>
													<span>Shop</span></Link>
											</li>

											<li>
												<Link to="/home" className='text-decoration-none'><i className="fas fa-sign-out-alt" aria-hidden="true"></i>
													<span>Log Out</span></Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-9 col-lg-8 m-b30">
								<div className="shop-bx"></div>

								<div className="shop-bx-title clearfix">
									<h5 className="text-uppercase">Contact Information</h5>
								</div>
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="mb-3">
											<label htmlFor="formcontrolinput8" className="form-label">Your Name:</label>
											<input type="text" className="form-control" id="formcontrolinput8" placeholder= {localStorage.getItem("userName")} />
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="mb-3">
											<label htmlFor="formcontrolinput5" className="form-label">Contact Number:</label>
											<input type="text" className="form-control" id="formcontrolinput5" placeholder="+1 123 456 7890" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="mb-3">
											<label htmlFor="formcontrolinput6" className="form-label">Email Address:</label>
											<input type="text" className="form-control" id="formcontrolinput6" placeholder={localStorage.getItem("userEmail")} />
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="mb-3">
											<label htmlFor="formcontrolinput7" className="form-label">Full Address:</label>
											<input type="text" className="form-control" id="formcontrolinput7" placeholder=" New york City" />
										</div>
									</div>

									<div className="col-lg-6 col-md-6">
										<div className="mb-3">
											<label htmlFor="formcontrolinput9" className="form-label">City:</label>
											<input type="text" className="form-control" id="formcontrolinput9" placeholder="City Name" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="mb-4 ">
											<label htmlFor="formcontrolinput10" className="form-label">Favourite list:</label>
											<div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
	
      />
    </div>
										</div>
									</div>
								</div>
								<button onClick={function(){toast.success("info updated successfully")}} className="btn btn-primary btnhover">Save Setting</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</>
}
