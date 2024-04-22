import { useQuery } from '@tanstack/react-query'
import { getWishlist } from '../../Services/wishlistApi'

export default function useWishlist() {

    const accessToken = localStorage.getItem("accessToken")


    const { isError, data: wishlist, isLoading } = useQuery({
        queryFn: () => getWishlist(accessToken),
        queryKey: ['wishlist', accessToken]

    })


    return { wishlist, isError, isLoading }
}
