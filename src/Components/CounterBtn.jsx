import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function CounterBtn({ decrease, increase, quantiny, status }) {








    return (

        <div className='border-2 flex columns-3  justify-between rounded-md font-semibold'>

            <button className='px-2'
                onClick={decrease}
            >-</button>
            <p className='px-4 py-0.5  border-s text-sm font-lato' >{status === 'pending' ? <ThreeDots
                visible={true}
                height="24"
                width="auto"
                color="#black"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{
                    "text-align": "center"
                }}
                wrapperClass=""
            /> : quantiny}  </p>
            <button className='px-3 bg-[#f68b1e] rounded-e-md text-white'
                onClick={increase}
            >+</button>
        </div>



    )
}
