import { useQuery } from "@tanstack/react-query"
// import { getCategories } from "../../Services/CategoriesApi"

import { getCategories } from "../../Services/CategoriesApi"

export default function useCategories() {
    const { data: categories, isError, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })
    return { categories, isError, isLoading }
}