import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function CounterBtn({ decrease, increase, quantiny, status }) {








    return (

        <div className='border flex  text-sm   justify-between rounded-md font-semibold'>

            <button className='w-1/3 bg-red-800 rounded-s-md text-white '
                onClick={decrease}
            >-</button>
            <p className='w-1/3 py-0.5 ' >{status === 'pending' ?

                <i className='inline-block '>

                    <ThreeDots
                        visible={true}
                        color="#black"
                        width="8"
                        height="full"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperClass="text-sm"
                    />
                </i>
                : quantiny}  </p>
            <button className='w-1/3   bg-green-600 rounded-e-md text-white'
                onClick={increase}
            >+</button>
        </div>



    )
}
