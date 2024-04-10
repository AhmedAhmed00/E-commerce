
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function Button({ isLoading, textContent }) {
    return (
        <button className='bg-red-700 text-white py-2 px-5 rounded-md '>{isLoading ? <ThreeDots
            visible={true}
            height="24"
            width="24"
            color="#ffff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        /> : textContent}</button>)
}


