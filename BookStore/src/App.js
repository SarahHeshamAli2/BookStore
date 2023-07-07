import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Profile from './Components/Profile/Profile';
import Products from './Components/AllBookorCourses/Products'
import ProductOfCourses from './Components/AllBookorCourses/ProductOfCourses'

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';
import Showbook from './Components/Showbook/Showbook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopUpProvider from './Components/Context/PopUpContext';
import jwtDecode from 'jwt-decode';
import CartProvider, { CartContext } from './Components/Context/CartContext';
import EmptyCart from './Components/EmptyCart/EmptyCart';
import Checkout from './Components/Checkout/Checkout'
import ShowCourses from './Components/Showbook/ShowCourses';
import AllOrders from './Components/AllOrder/AllOrder';
import OrderDone from './Components/orderDone/orderDone';
import RecommendBook from './Components/Recommend/RecommendBook';
import SearchResult from './Components/SearchResult/SearchResult';

export default function App() {
  
  

  const [currentUser, setCurrentUser] = useState(null)

  function getUserData() {

    const userToken = localStorage.getItem("userToken")
    const userData = jwtDecode(userToken)
    setCurrentUser(userData)
    const userId = localStorage.setItem("userId",userData.userId)

  }
  function logOut() {
    localStorage.removeItem("userToken")
    setCurrentUser(null)
    localStorage.removeItem("profile")

  }
  useEffect(function(){


  
    if(localStorage.getItem("userToken") !=null && currentUser == null) {
    
        getUserData()
    }
    
        },[])
  
  const router = createBrowserRouter([
    {path:'' ,element:<PopUpProvider><CartProvider><Layout logOut={logOut} currentUser={currentUser} getUserData={getUserData}/></CartProvider></PopUpProvider> ,children:[
      {path:'',element:<Home />},    
    {path:'home',element:<Home />,children:[
      {path:'Login', element:<PopUpProvider><Login /></PopUpProvider>}
    ]

  },
    {path:'about',element:<About/>},
    {path:'searchResult',element:<CartProvider><SearchResult/></CartProvider>},
    {path:'orderDone',element:<OrderDone/>},
    {path:'contact',element:<Contact/>},
    {path:'cart',element:<CartProvider><Cart /></CartProvider>},
    {path:'Products',element:<CartProvider><Products /></CartProvider>},
    {path:'ProductOfCourses',element:<CartProvider><ProductOfCourses /></CartProvider>},
    {path:'Checkout',element:<CartProvider><Checkout/></CartProvider>},
    {path:'profile',element:<CartProvider><Profile /></CartProvider>},
    {path:'emptycart',element:<EmptyCart />},
    {path:'allOrder',element:<AllOrders />},
    {path:'rec',element:<RecommendBook />},
    {path:'Signup',element: <PopUpProvider><Signup /></PopUpProvider>},

    {path:'Showbook/:id',element:<CartProvider><Showbook /></CartProvider>},
    {path:'ShowCourses/:id',element:<CartProvider><ShowCourses /></CartProvider>},

      {path:'*',element:<h2>Error404</h2>}]}  ])
  return<>
  <ToastContainer/>
  <RouterProvider
  router={router}
/> </>
}