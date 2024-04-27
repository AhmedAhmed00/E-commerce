
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function Button({ isLoading, textContent, onclick, styles, type, formId, disabled, btnRef }) {





    return (
        <button disabled={disabled} ref={btnRef} type={type} form={formId} onClick={onclick} className={
            `bg-primary  text-center mx-auto text-sm rounded-md my-2 py-1 ` + styles}>{isLoading ?

                <i className='w-10 inline-block '>
                    <ThreeDots
                        visible={true}
                        height="auto"
                        width="auto"
                        color="#ffff"
                        radius="9"
                        ariaLabel="three-dots-loading"
                    />
                </i>




                : textContent}</button>)
}


