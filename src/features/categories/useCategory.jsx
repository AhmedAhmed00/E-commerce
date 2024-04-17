import { useQuery } from "@tanstack/react-query";
import { getSpecificCategory } from "../../Services/CategoriesApi";



export default function useCategory() {
    const { data: category, isError, isLoading } = useQuery({
        queryKey: ["category"],
        queryFn: (categoryId) => getSpecificCategory(categoryId),
    })

    console.log(category);
    return { category, isError, isLoading }

}

