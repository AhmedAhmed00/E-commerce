import BASE_URL from "./BaseUrl";


export async function getProducts(params) {

    const queryParams = new URLSearchParams()
    for (const key in params) {
        if (params.hasOwnProperty(key) && params[key] !== '') {
            queryParams.append(key, params[key]);
        }
    }



    const url = `${BASE_URL}/products?${queryParams}`





    const res = await fetch(url)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const products = await res.json()
    return products

}


export async function getSpecificProduct(id) {

    const res = await fetch(`${BASE_URL}/products/${id}`)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const product = await res.json()
    return product.data

}





// export async function getCategories() {
//     const res = await fetch(`${BASE_URL}/categories`)

//     if (!res.ok) {
//         throw new Error("Failed to fetch data")
//     }
//     const categories = await res.json()
//     console.log(categories);
//     return categories.data

// }

// export async function getSpecificCategory(id) {
//     const res = await fetch(`${BASE_URL}/categories/${id}`)
//     if (!res.ok) {
//         throw new Error("Failed to fetch data")
//     }
//     const categories = await res.json()
//     console.log(categories);

//     return categories.data

// }













