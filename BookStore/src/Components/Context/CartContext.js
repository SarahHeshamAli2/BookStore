import { createContext, useState } from "react";
import $ from "jquery"
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const cartContext = createContext()

export default function CartProvider({children}) {
   const navigate =  useNavigate()
    const [cartItems, setcartItems] = useState(null)
    const [numberOfCartItems, setNumberOfCartItems] = useState(null)
    const [totalCartPrice, settotalCartPrice] = useState(null)
    const [load, setLoad] = useState(false)
    async function clearCart () {
try {
    const response = await axios.delete(`https://booklandstore.onrender.com/api/v1/cart`,{ headers: {
        Authorization: "Bearer "+ localStorage.getItem("userToken"),
      } })
      if(response.status == 204) {
        console.log("eshta");
        setcartItems([])
        console.log(cartItems);
      }
} catch (error) {
    console.log("error",error);
    console.log();
    
}

    }

async function addToCart(prodId) {


    try {
        setLoad(true)
        const {data} = await axios.post(`https://booklandstore.onrender.com/api/v1/cart`,{"productId" : prodId , "userId" : localStorage.getItem("userId")},{
            headers: {
                Authorization: "Bearer "+ localStorage.getItem("userToken"),
              } 
        })
        console.log(data);
        setLoad(false)
        if(data.status == "success") {
            setcartItems(data.cartItems)
            setNumberOfCartItems(data.numOfCartItems)
            settotalCartPrice(data.totalCartPrice)
            toast.success(data.message)
        }
    } catch (error) {
      console.log("error",error);  
      toast.error(error.response.data.message)
      setLoad(false)
    }

}
async function getCartProds() {
   try {
    const {data} =await axios.get (`https://booklandstore.onrender.com/api/v1/cart` , {
        headers: {
            Authorization: "Bearer "+ localStorage.getItem("userToken"),
          } 
    })
    console.log(data);
    setNumberOfCartItems(data.numOfCartItems)
    setcartItems(data.data.cartItems)
    settotalCartPrice(data.data.totalCartPrice)
   } catch (error) {
    console.log("error",error);
    console.log();
    // if(error.response.data.status == "fail") {
    //     navigate("/emptycart")
    // }
   }
}
async function updateCartItemsQuantity(id,count) {

    try {
        const {data} = await axios.put(`https://booklandstore.onrender.com/api/v1/cart/${id}`,{
            "userId":localStorage.getItem("userId"),
    "quantity" : count
        },{
            headers: {
                Authorization: "Bearer "+ localStorage.getItem("userToken"),
              }  
        })
        setcartItems(data.data.cartItems)
        settotalCartPrice(data.data.totalCartPrice)
    } catch (error) {
        console.log("error",error);
    }



}
return <cartContext.Provider value={{addToCart,getCartProds,numberOfCartItems,cartItems,totalCartPrice,updateCartItemsQuantity,load,clearCart}} >


{children}
</cartContext.Provider>

}
