import React from 'react'
import { Oval } from 'react-loader-spinner'

export default function ConfirmDelettion({ handleDeletion, setConfirmShow, id, deleteStatus }) {

    return (
        <div className='fixed inset-0 bg-black backdrop-blur-sm  bg-opacity-30 grid place-items-center z-50'>
            <div className='bg-gray-100 p-10 blur-none rounded-lg shadow-md   '>
                <h2 className=' mb-6'>Are You sure You Want to delete this item ? </h2>

                {deleteStatus === 'pending' ? <div className='w-fit m-auto'> <Oval height={60} width={60} /></div> :
                    <div className='flex columns-2 gap-4'>
                        <button onClick={handleDeletion} className='w-1/2 rounded-md bg-green-500 text-white'>Yes</button>
                        <button onClick={() => setConfirmShow(show => !show)} className='w-1/2 rounded-md bg-red-800 text-white'>No</button>
                    </div>}
            </div>
        </div>
    )
}
