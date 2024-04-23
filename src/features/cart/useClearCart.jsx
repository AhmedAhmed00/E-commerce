import { useMutation, useQueryClient } from '@tanstack/react-query'
import { clearCart } from '../../Services/cartApi'
import toast from 'react-hot-toast'

export default function useClearCart() {
    const accessToken = localStorage.getItem('accessToken')
    const queryClient = useQueryClient()

    const { mutate: clearCartItems, status } = useMutation({
        mutationFn: () => clearCart(accessToken),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
            toast.success("Cart Item Deleted successfully ")
        },
        onError: (e) => {
            console.log(e);
            toast.error("Error while Deleting")
        }
    })

    return { clearCartItems, status }

}
