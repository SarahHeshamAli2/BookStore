import { createContext, useState } from "react";
import $ from "jquery"
import axios from "axios";
import { toast } from "react-toastify";

export const cartContext = createContext()

export default function CartProvider({children}) {
    const [cartItems, setcartItems] = useState(null)
    const [numberOfCartItems, setNumberOfCartItems] = useState(null)
    const [totalCartPrice, settotalCartPrice] = useState(null)
    const [quantity, setQuantity] = useState(null)

async function addToCart(prodId) {


    try {
        const {data} = await axios.post(`https://booklandstore.onrender.com/api/v1/cart`,{"productId" : prodId , "userId" : localStorage.getItem("userId")},{
            headers: {
                Authorization: "Bearer "+ localStorage.getItem("userToken"),
              } 
        })
        console.log(data);
        if(data.status == "success") {
            setcartItems(data.cartItems)
            setNumberOfCartItems(data.numOfCartItems)
            settotalCartPrice(data.totalCartPrice)
            toast.success(data.message)
        }
    } catch (error) {
      console.log("error",error);  
      toast.error(error.response.data.message)
    }

}
async function getCartProds() {
   try {
    const {data} =await axios.get (`https://booklandstore.onrender.com/api/v1/cart` , {
        headers: {
            Authorization: "Bearer "+ localStorage.getItem("userToken"),
          } 
    })
    console.log(data.data.totalCartPrice);
    setNumberOfCartItems(data.numOfCartItems)
    setcartItems(data.data.cartItems)
    settotalCartPrice(data.data.totalCartPrice)
   } catch (error) {
    console.log("error",error);
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
return <cartContext.Provider value={{addToCart,getCartProds,numberOfCartItems,cartItems,totalCartPrice,updateCartItemsQuantity}} >


{children}
</cartContext.Provider>

}
