
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function Button({ isLoading, textContent, onclick, styles }) {





    return (
        <button onClick={onclick} className={`bg-primary text-white text-center mx-auto text-sm rounded-md ` + styles}>{isLoading ? <ThreeDots
            visible={true}
            height="24"
            width="24"
            color="#ffff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
                "text-align": "center"
            }}
            wrapperClass=""
        /> : textContent}</button>)
}


