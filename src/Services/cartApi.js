import BASE_URL from "./BaseUrl";




export async function addProductToCart(id, accessToken) {

    const body = {
        productId: id
    }
    const res = await fetch(`${BASE_URL}/cart/`,
        {
            headers: {
                "Accept": 'application/json, text/plain, */*',
                "content-type": "application/json",
                "token": accessToken
            }, body: JSON.stringify(body), method: "POST"
        })
    if (!res.ok) {
        throw new Error("error")

    }
    const data = await res.json()
    return data

}



export async function updataProductCount(id, quantity) {




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

    return data

}

