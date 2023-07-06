import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderDone() {
return <>

<div className="container w-75 my-5 py-5">
    <div className='d-flex justify-content-center'>
    <img src={require("../../images/338978.png")} alt="EmptyWishList img" className='w-25'/>

    </div>

<h3 className='text-center m-0 '>Your order has been shipped.. thank you for choosing us</h3>
<Link to={"/allorder"}>

<button className=' btn btn-primary btnhover d-block w-50 m-auto m-0'>all orders</button>

</Link>


  </div>
  



</>
}
