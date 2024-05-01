import BASE_URL from "./BaseUrl";


export async function getCategories() {
    const res = await fetch(`${BASE_URL}/categories`)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const categories = await res.json()
    return categories.data

}

export async function getSpecificCategory({ categoryId }) {
    const res = await fetch(`${BASE_URL}/categories/${"6439d2f467d9aa4ca97064a8"}`)
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const categories = await res.json()

    return categories.data

}

