import React from 'react'
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


export default function App() {


  function getUserData() {

    const userToken = localStorage.getItem("userToken")
    const userData = jwtDecode(userToken)

  }
  const router = createBrowserRouter([
    {path:'' ,element:<PopUpProvider><Layout getUserData={getUserData}/></PopUpProvider> ,children:[
      {path:'',element:<Home />},    
    {path:'home',element:<Home />,children:[
      {path:'Login', element:<PopUpProvider><Login /></PopUpProvider>}
    ]
  
  },
    {path:'about',element:<About/>},
    {path:'contact',element:<Contact/>},
    {path:'cart',element:<Cart />},
    {path:'Products',element:<Products />},

    {path:'profile',element:<Profile />},
    {path:'Signup',element: <PopUpProvider><Signup /></PopUpProvider>},

    {path:'Showbook/:id',element:<Showbook />},
      {path:'*',element:<h2>Error404</h2>}]}  ])
  return<>
  <ToastContainer/>
  <RouterProvider
  router={router}
/> </>
}