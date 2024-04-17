import { useQuery } from '@tanstack/react-query'
import { getSpecificProduct } from '../../Services/ProductsApi'

export default function useProduct(productId) {
    const { data: product, isError, isLoading } = useQuery({
        queryKey: ['product', productId],
        queryFn: () => getSpecificProduct(productId)
    })
    return { product, isError, isLoading }
}
