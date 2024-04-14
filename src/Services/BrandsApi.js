
import BASE_URL from './BaseUrl';


export async function getBrands() {
    const res = await fetch(`${BASE_URL}/brands`)
    const data = await res.json()
    return data.data
}




