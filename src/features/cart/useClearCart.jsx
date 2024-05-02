import { useMutation, useQueryClient } from '@tanstack/react-query'
import { clearCart } from '../../Services/cartApi'
import toast from 'react-hot-toast'

export default function useClearCart() {
    const accessToken = localStorage.getItem('accessToken')
    const queryClient = useQueryClient()

    const { mutate: clearCartItems, status } = useMutation({
        mutationFn: () => clearCart(accessToken),
        onMutate: () => {
            toast.loading("Clearing ....")
        },
        onSuccess: () => {


            queryClient.resetQueries({
                queryKey: ['cart', accessToken]
            })
            toast.dismiss()
            toast.success("Cart Items have been Deleted successfully ")
        },
        onError: (e) => {
            toast.dismiss()

            toast.error("Error while Deleting")
        }
    })

    return { clearCartItems, status }

}
