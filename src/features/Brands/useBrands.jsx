import { useQuery } from "@tanstack/react-query"
import { getBrands } from "../../Services/BrandsApi"

function useBrands() {
    const { data: brands, isLoading } = useQuery({
        queryKey: ['brand'],
        queryFn: getBrands
    })
    return { brands, isLoading }

}

export default useBrands 