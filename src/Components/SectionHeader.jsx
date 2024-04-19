import React from 'react'

export default function SectionHeader({ redContent, textContent, bg }) {
    return (
        <div className={`py-6 text-center ` + bg}>

            <h3 className='text-red-500 font-semibold m-auto  '>{redContent}</h3>

            <h2 className='font-semibold text-4xl first-letter:text-red-500 text-primary'>{textContent}</h2>
            <div>
            </div>
        </div>

    )
}
