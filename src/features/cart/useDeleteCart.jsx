import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCartItem, updataProductCount } from '../../Services/cartApi'
import toast from 'react-hot-toast'
import { useAuth } from '../authentication/AuthContext'

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
            console.log(e);
            toast.error("Error while Deleting")
        }
    })

    return { deleteItem, status }

}
