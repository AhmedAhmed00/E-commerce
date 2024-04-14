import { createContext } from "react";


const CartContext = createContext()



export default function CartProvider({ childern }) {






    return (
        <CartContext.Provider value={"x"}  >
            {childern}
        </CartContext.Provider>
    )
}
