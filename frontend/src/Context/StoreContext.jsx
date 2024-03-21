import { createContext, useEffect, useState } from "react";
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        // When cart does not have any product then add first Product to the cart
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }else{
            // when cart have thr product the we will increase the quentity
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId] + 1}))
        }
    }

    const removeFromCart = (itemId) => {
        // it will remove thr product if one product contain it will 0 and if 1 < the it will decrease
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price*cartItems[item]
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        getTotalCartAmount,

        addToCart,
        removeFromCart
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
    
export default StoreContextProvider