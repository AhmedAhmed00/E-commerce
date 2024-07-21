import { useState } from "react"
import useProducts from "../features/Products/useProducts"

export default function useSearch() {


    const [searchQuery, setSearchQuery] = useState("")

    const { data: { data } = {} } = useProducts()

    let arrOfResaults = []

    if (searchQuery.length > 0) {
        arrOfResaults = data?.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }


    return
}
