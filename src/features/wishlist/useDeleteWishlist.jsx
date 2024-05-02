import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeFromWishlist } from '../../Services/wishlistApi'
import toast from 'react-hot-toast'

export default function useDeleteWishlist() {

    const accessToken = localStorage.getItem("accessToken")
    const queryClient = useQueryClient()


    const { mutate, isError, status } = useMutation({
        mutationFn: (id) => removeFromWishlist(id, accessToken),


        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['wishlist']
            })
            toast.success("Removed Successfully From wishlist")
        },
        onError: () => {
            toast.error("cannot Delete this product")
        }
    })

    return { mutate, isError, status }
}
