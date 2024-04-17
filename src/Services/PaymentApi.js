
import BASE_URL from './BaseUrl';



export async function createCashOrder(body, _id, token) {



    console.log(body);
    console.log(_id);
    console.log(token);



    const res = await fetch(`${BASE_URL}/orders/${_id}`, { body: JSON.stringify(body), headers: { token: token }, method: "POST" })
    if (!res.ok) {
        throw new Error("Failed to fetch data ")
    }
    const data = await res.json()

    console.log(data);



    return data

}




export async function createOnlineOrder(body, _id, token, url = "http://localhost:5173/ordercreated") {



    console.log(body);
    console.log(_id);
    console.log(token);



    const res = await fetch(`${BASE_URL}/orders/checkout-session/${_id}?url=${url}`, { body: JSON.stringify(body), headers: { token: token }, method: "POST" })
    if (!res.ok) {
        throw new Error("Failed to fetch data 222222222")
    }
    const data = await res.json()

    console.log(data);

    return data

}










// export async function getAllOrders(body, _id, token) {


//     const res = await fetch(`${BASE_URL}/orders/${_id}`, { body: JSON.stringify(body), headers: { token: token }, method: "POST" })
//     if (!res.ok) {
//         throw new Error("Failed to fetch data 222222222")
//     }
//     const data = await res.json()

//     console.log(data);



//     return data

// }

