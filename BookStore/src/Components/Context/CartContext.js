import { createContext, useState } from "react";
import $ from "jquery"
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../EmptyCart/EmptyCart";

export const cartContext = createContext()

export default function CartProvider({children}) {
    const [allProducts , setAllProducts]=useState(null);
    const [catgegory , setCategory]=useState(null);

    async function getAllPrducts(){

       try{
        const {data} =await axios.get('https://booklandstore.onrender.com/api/v1/products')
        console.log(data.data);
       
        setAllProducts(data.data)
        setCategory(data.data)
        
        
    }
       catch(e){
        console.log("Error: ",e);
       }
    }
   const navigate =  useNavigate()
    const [cartItems, setcartItems] = useState(null)
    const [numberOfCartItems, setNumberOfCartItems] = useState(null)
    const [totalCartPrice, settotalCartPrice] = useState(null)
    const [load, setLoad] = useState(false)
    const [cartId, setCartId] = useState(null)
    async function clearCart () {
try {
    const response = await axios.delete(`https://booklandstore.onrender.com/api/v1/cart`,{ headers: {
        Authorization: "Bearer "+ localStorage.getItem("userToken"),
      } })
      console.log(response);
      if(response.status == 204) {
        console.log(cartItems);
        setcartItems([])
      }
} catch (error) {
    console.log("error",error);
    console.log();
    
}

    }

async function deleteSpecItem(id)
 {
    try {
        
    const {data} = await axios.delete(`https://booklandstore.onrender.com/api/v1/cart/${id}`,{
        headers: {
            Authorization: "Bearer "+ localStorage.getItem("userToken"),
          } 
    })
    if(data.status == "success"){
        toast.error("product deleted successfully")
        setcartItems(data.data.cartItems)
        settotalCartPrice(data.data.totalCartPrice)
    }
    console.log(data);

        
    } catch (error) {
        console.log("error",error);
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
       setLoad(true)
    const {data} =await axios.get (`https://booklandstore.onrender.com/api/v1/cart` , {
        headers: {
            Authorization: "Bearer "+ localStorage.getItem("userToken"),
          } 
    })
    setLoad(false)
    console.log(data.data);
    setCartId(data.data._id)
    setNumberOfCartItems(data.numOfCartItems)
    setcartItems(data.data.cartItems)
    settotalCartPrice(data.data.totalCartPrice)

   } catch (error) {
    setLoad(false)
    console.log("error",error);
    if(error.response.data.status == "fail") {

        navigate("/emptycart")
      
    }

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
return <cartContext.Provider value={{addToCart,getCartProds,numberOfCartItems,cartItems,totalCartPrice,updateCartItemsQuantity,load,clearCart,deleteSpecItem,getAllPrducts,allProducts,catgegory,cartId}} >


{children}
</cartContext.Provider>

}
