import { createContext, useState } from "react";

export const CreatedOrderContext = createContext();

export default function CreatedOrderProvider({ children }) {
  // there is no endpoint to get the created order data so i will store it in context

  const [createdOrder, setCreatedOrder] = useState({
    totalOrderPrice: "",
    isConfrimed: false,
    createdAt: "",
    id: "",
  });

  return (
    <CreatedOrderContext.Provider value={{ createdOrder, setCreatedOrder }}>
      {children}
    </CreatedOrderContext.Provider>
  );
}
