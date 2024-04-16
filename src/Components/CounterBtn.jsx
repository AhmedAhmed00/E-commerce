import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function CounterBtn({ decrease, increase, quantiny, status }) {








    return (

        <div className='border-2 flex columns-3  justify-between rounded-md font-semibold'>

            <button className='px-2'
                onClick={decrease}
            >-</button>
            <p className='px-4 py-0.5 border-s text-sm font-lato' >{status === 'pending' ?

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
            <button className='px-3 bg-[#f68b1e] rounded-e-md text-white'
                onClick={increase}
            >+</button>
        </div>



    )
}
