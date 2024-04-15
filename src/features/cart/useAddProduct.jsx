import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToCart } from "../../Services/cartApi";
import toast from "react-hot-toast";



export default function useAddProduct() {

    const queryClient = useQueryClient()
    const accessToken = localStorage.getItem("accessToken")
    const { data, isError, isIdle, status, mutate: addProduct } = useMutation({
        mutationFn: (prouctId) => addProductToCart(prouctId, accessToken),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
            toast.success("Product Addes Successfully")
        }, onError: () => {
            toast.error("Error while adding")
        }
    })

    return { data, isError, status, addProduct }
}