import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import EmptyCart from '../EmptyCart/EmptyCart';
import background from '../../images/bg3.jpg';

export default function AllOrders({currentUser}) {
const [allOrder, setallOrder] = useState(null)
const [cartItems, setCartItems] = useState(null)
const [loading, setloading] = useState(false)

useEffect(()=>{
   getAllOrders()
},[])



    async function getAllOrders () {


try {
    setloading(true)
    const {data} = await axios.get('https://booklandstore.onrender.com/api/v1/orders' , {
        params : {
            "userId" : localStorage.getItem("userId")
        } , headers: {
                        Authorization: "Bearer "+ localStorage.getItem("userToken"),
                      } 
    })
    console.log(data.data);

    setallOrder(data.data)
    setCartItems(data.data.cartItems)
    setloading(false)
    
} catch (error) {
    console.log("error" , error);
    setloading(false)
}        
    }
return <> 
 <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{backgroundImage:
    `${process.env.PUBLIC_URL+ background})`}}>
      <div className="container">
        <div className="dz-bnr-inr-entry">
          <h1>Your Orders</h1>
          <nav aria-label="breadcrumb" className="breadcrumb-row">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/home"> Home</Link></li>
              <li className="breadcrumb-item">Your Orders</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
{loading ? <LoadingScreen/> : <div className='my-5 py-5 container'>
    {allOrder?.length == 0 ? <EmptyCart/> : <> <h2>Your Orders</h2>
{allOrder?.map((order,ind)=> <div className="row g-5 align-items-center border border-1 my-2 rounded-1" key={ind}>

<div className="col-md-3">
    <div className="inner-col   fs-5">
        <p className='fw-bolder'>Placed On: <span className='mx-2 fw-lighter text-main'>{order.createdAt.slice(0,10)}</span></p>
        <p className='fw-bolder'>Total price: <span className='mx-2 fw-lighter text-main'>{Math.round(order.totalOrderPrice)} $</span> </p>
        <span className='fw-bolder'>Payment method : <span className='mx-2  fw-lighter text-main'>{order.paymentMethodType}</span></span>
       

    </div>

    </div>
    
    {
    order?.cartItems.map((item,spc)=> <div className="col-md-3 col-6" key={spc}>
        <Link to={`/Showbook/${item.product._id}`}>
        <div className="inner d-flex align-items-center">
        <div>
            {console.log(item.product.imageCover.slice(76))}
        <img  src={item.product.imageCover.slice(76)} alt="" style={{borderRadius: "5px" , height : "200px" , width : "70%" }} />
        </div>
        <div className='mx-2'>


            <h5 className='small fw-bolder text-primary fs-4'>${Math.round( item.price)} </h5>
        </div>
        
    </div>
        
        </Link>
</div>)
}


</div>)}</>}
   


</div> }




</>
}

