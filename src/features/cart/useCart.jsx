import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../../Services/cartApi";
import { useContext } from "react";

export default function useCart(token) {






    const accessToken = localStorage.getItem("accessToken")
    const { data: cart, isError, isLoading } = useQuery({
        queryKey: ['cart', accessToken],
        queryFn: () => getCartItems(accessToken),
        retry: 1,
    })

    return { cart, isError, isLoading }
}