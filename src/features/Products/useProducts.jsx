import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../Services/ProductsApi"

function useProducts() {

    const { data: products, isLoading, status, isError } = useQuery(
        {
            queryKey: ["products"],
            queryFn: () =>
                getProducts()
            ,
        },
    )

    return { products, isLoading, status, isError }
}

export default useProducts