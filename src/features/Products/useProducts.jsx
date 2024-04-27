import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../Services/ProductsApi"
import { useSearchParams } from "react-router-dom"

function useProducts(limit) {

    const [searchParams] = useSearchParams()
    const params = {
        "limit": limit || '',
        'category[in]': searchParams.get("category[in]") || '',
        'brand': searchParams.get("brand") || '',
        "price[lte]": searchParams.get("price[lte]") || '',
        "price[gte]": searchParams.get("price[gte]") || '',
        "page": searchParams.get("page") || '',
        "sort": searchParams.get("sort") || '',
    }

    const { data, isLoading, status, isError, refetch, isFetching } = useQuery(
        {
            queryKey: ["products", params],
            queryFn: () =>
                getProducts(params),
        },
    )

    return { data, isLoading, status, isError, refetch, isFetching }
}

export default useProducts