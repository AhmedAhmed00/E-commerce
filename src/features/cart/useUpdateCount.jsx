import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updataProductCount } from '../../Services/cartApi'
import toast from 'react-hot-toast'

export default function useUpdateCount() {

    const queryClient = useQueryClient()

    const { mutate: mutateCount, status } = useMutation({
        mutationFn: ({ id, quantiny }) => updataProductCount(id, quantiny),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
            toast.success("count Increased successfully ")
        },
        onError: (e) => {

            toast.error("cannot update count")
        }
    })

    return { mutateCount, status }

}
