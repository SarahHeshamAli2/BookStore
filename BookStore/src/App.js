import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Profile from './Components/Profile/Profile';
import Products from './Components/AllBook/Products'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';
import Showbook from './Components/Showbook/Showbook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopUpProvider from './Components/Context/PopUpContext';
import jwtDecode from 'jwt-decode';
import ProfilePicture from './Components/ProfilePicture/ProfilePicture';
import CartProvider, { CartContext } from './Components/Context/CartContext';


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
    {path:'contact',element:<Contact/>},
    {path:'cart',element:<CartProvider><Cart /></CartProvider>},
    {path:'Products',element:<CartProvider><Products /></CartProvider>},

    {path:'profile',element:<Profile />},
    {path:'trial',element:<ProfilePicture />},
    {path:'Signup',element: <PopUpProvider><Signup /></PopUpProvider>},

    {path:'Showbook/:id',element:<CartProvider><Showbook /></CartProvider>},
      {path:'*',element:<h2>Error404</h2>}]}  ])
  return<>
  <ToastContainer/>
  <RouterProvider
  router={router}
/> </>
}