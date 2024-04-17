import axios from "axios";
import BASE_URL from "./BaseUrl";
import { json } from "react-router-dom";


export async function getProducts(urlParams = {}) {




    const params = new URLSearchParams(urlParams)
    const url = `${BASE_URL}/products?` + params
    console.log(url);





    const res = await fetch(url)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const products = await res.json()
    console.log(products);
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













