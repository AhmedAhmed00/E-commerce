import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../../Services/cartApi";

export default function useCart(token) {






    const accessToken = localStorage.getItem("accessToken")
    const { data: cart, isError, isLoading } = useQuery({
        queryKey: ['cart', accessToken],
        queryFn: () => getCartItems(accessToken),
        enabled: !!accessToken
    })

    return { cart, isError, isLoading }
}