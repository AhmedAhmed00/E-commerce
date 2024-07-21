import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export default function LoaderSpinner({ color }) {
    return (

        <div className='w-44 m-auto mt-16 h-screen' >
            <InfinitySpin color={color || '#002d58'} />
        </div>


    )
}
