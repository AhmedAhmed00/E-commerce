import axios from "axios";
import BASE_URL from "./BaseUrl";



export async function addProductToCart(id, accessToken) {
    console.log(id);

    const body = {
        productId: id
    }
    const res = await axios.post(`${BASE_URL}/cart/`, body, {
        headers: {
            token: accessToken
        }

    })

    console.log(res);
    return res.data

}


export async function updataProductCount(id, quantity) {
    console.log(id);



    const body = JSON.stringify({ count: quantity })

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        body: body,
        headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("accessToken")

        },
        method: "PUT"
    })

    if (!res.ok) {
        throw new Error("Failed to fetch data 222222222")
    }

    const data = await res.json()


    return data


}




export async function deleteCartItem(id, token) {


    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        headers: {
            "Content-Type": "application/json",
            token: token

        },
        method: "DELETE"
    })

    if (!res.ok) {
        throw new Error("Failed to fetch data 222222222")
    }

    const data = await res.json()


    return data


}


// export async function clearCart() {


//     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/`, {
//         headers: {
//             "Content-Type": "application/json",
//             token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTUyMGVmYmU4YjUyMzIzNWMwNDU5NCIsIm5hbWUiOiJhaG1lZCBoYW1keSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEzMDA5NTQ2LCJleHAiOjE3MjA3ODU1NDZ9.pbTr_wONEesaWKWKtyLaAxStyo9J2vMF6An4wMxzifA"

//         },
//         method: "DELETE"
//     })

//     if (!res.ok) {
//         throw new Error("Failed to fetch data 222222222")
//     }

//     const data = await res.json()


//     return data


// }






export async function getCartItems(token) {
    const res = await fetch(`${BASE_URL}/cart/`, {
        headers: {
            "Content-Type": "application/json",
            token
        },

    })
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const data = await res.json()
    return data

}


export async function clearCart(token) {
    const res = await fetch(`${BASE_URL}/cart/`, {
        headers: {
            "Content-Type": "application/json",

            token
        },
        method: "DELETE"

    })
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const data = await res.json()
    console.log(data);
    return data

}

