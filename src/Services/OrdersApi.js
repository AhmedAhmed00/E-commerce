

import BASE_URL from "./BaseUrl";




export async function getAllOrders(id) {


    const res = await fetch(`${BASE_URL}/orders/user/${id}`)
    if (!res.ok) {
        throw new Error("Failed to fetch data 222222222")
    }
    const data = await res.json()




    return data

}