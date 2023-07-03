import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
return <>
<div className="container w-75">
    <div className='d-flex justify-content-center'>
    <img src={require("../../images/empty.jpg")} alt="emptyCart img" className='w-50'/>

    </div>

<Link to={"/products"}>

<button className=' btn btn-outline-primary d-block w-50 m-auto m-0'>start shopping</button>

</Link>


  </div>
  
</>
}
