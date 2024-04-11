import BASE_URL from "./BaseUrl";


export async function getAllProducts() {





    const res = await fetch(`${BASE_URL}/products`)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const products = await res.json()
    return products.data


}