import { Children, createContext, useContext, useState } from "react";

export const CreatedOrderContext = createContext()



export default function CreatedOrderProvider({ children }) {
    const [createdOrder, setCreatedOrder] = useState({
        totalOrderPrice: "", isConfrimed: false, createdAt: "", id: "",
    })

    return <CreatedOrderContext.Provider value={{ createdOrder, setCreatedOrder }}>

        {children}

    </CreatedOrderContext.Provider>
}