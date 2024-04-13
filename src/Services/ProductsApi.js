import BASE_URL from "./BaseUrl";


export async function getAllProducts() {

    const res = await fetch(`${BASE_URL}/products`)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const products = await res.json()
    return products.data

}


export async function getSpecificProduct(id) {

    const res = await fetch(`${BASE_URL}/products/${id}`)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const product = await res.json()
    return product.data

}




export async function getCategories() {
    const res = await fetch(`${BASE_URL}/categories`)
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const categories = await res.json()

    return categories.data

}