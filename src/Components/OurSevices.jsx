import React from 'react'
import { FaMapMarkedAlt, FaShuttleVan } from 'react-icons/fa'
import { GiBoxUnpacking } from 'react-icons/gi'
import { IoRocket } from 'react-icons/io5'

export default function OurSevices() {
    return (
        <>



            <div className='grid grid-cols-2  gap-5 mb-6'>

                <img className='rounded-lg shadow-sm' src="../../public/assets/banner-1.jpg" alt="" />

                <img className='rounded-lg shadow-sm' src="../../public/assets/banner-2.jpg" alt="" />

            </div>






            <div className='grid grid-cols-4 container text-center fontbg-primary-3'>
                <div className='flex   py-4  roun2 mb- px-4 items-center   '>
                    <i className=''><IoRocket className='w-14 h-14 mb-2 me-4 bg-primary text-white p-2 rounded-full' />
                    </i>
                    <div>
                        <h3>
                            Fast & Free Shipping</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                </div>
                <div className='flex   py-4   px-2 items-center'>
                    <i className=' '><FaShuttleVan className='w-14 h-14 mb-2 me-4 bg-primary text-white p-2 rounded-full' />
                    </i>
                    <div>
                        <h3>
                            Fast & Free Shipping</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                </div>
                <div className='flex  py-4   px-2  items-center    '>
                    <i className=''><GiBoxUnpacking className='w-14 h-14 mb-2 me-4 bg-primary text-white p-2 rounded-full' />
                    </i>
                    <div>
                        <h3>
                            Fast & Free Shipping</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                </div>
                <div className='flex  py-4   px-2 items-center   '>
                    <i className=''><FaMapMarkedAlt className='w-14 h-14 mb-2 me-4 bg-primary text-white p-2 rounded-full' />
                    </i>
                    <div>
                        <h3>
                            Fast & Free Shipping</h3>
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                    </div>

                </div>
            </div>

        </>
    )
}
