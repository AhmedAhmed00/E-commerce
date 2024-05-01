
import BASE_URL from './BaseUrl';



export async function createCashOrder(body, _id, token) {






    const res = await fetch(`${BASE_URL}/orders/${_id}`, { body: JSON.stringify(body), headers: { token: token }, method: "POST" })
    if (!res.ok) {
        throw new Error("Failed to fetch data ")
    }
    const data = await res.json()





    return data

}




export async function createOnlineOrder(body, _id, token, urlId) {




    const url = `http://${window.location.host}`



    const res = await fetch(`${BASE_URL}/orders/checkout-session/${_id}?url=${url}`, { body: JSON.stringify(body), headers: { token: token }, method: "POST" })
    if (!res.ok) {
        throw new Error("Failed to fetch data ")
    }
    const data = await res.json()


    return data

}











