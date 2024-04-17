import React from 'react'

export default function SectionHeader({ redContent, textContent }) {
    return (
        <div className='my-8 text-center'>
            {/* <div className='flex items-center text-xl'> */}
            {/* <span className='w-3 h-8 me-2 mb-1 bg-red-500'></span> */}
            <h3 className='text-red-500 font-semibold m-auto  '>{redContent}</h3>
            {/* </div> */}
            <h2 className='font-semibold text-4xl first-letter:text-red-500'>{textContent}</h2>
            <div>
            </div>
        </div>

    )
}
