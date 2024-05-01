import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCartItem } from '../../Services/cartApi'
import toast from 'react-hot-toast'

export default function useDeleteItems() {

    const queryClient = useQueryClient()
    const accessToken = localStorage.getItem('accessToken')

    const { mutate: deleteItem, status } = useMutation({
        mutationFn: (id) => deleteCartItem(id, accessToken),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
            toast.success("Cart Item Deleted successfully ")
        },
        onError: (e) => {
            toast.error("Error while Deleting")
        }
    })

    return { deleteItem, status }

}
