import React from 'react'

export default function Footer() {
    return (
        <div className='py-10  bg-primary   '>
            <div className="container  flex justify-between  colum flex-wrap text-white">
                <div className='w-1/4'>
                    <h3 className='py-2 ' >INFOMATION</h3>
                    <ul>

                        <li>Privacy and Cookie Policy</li>
                        <li>About Us</li>
                        <li>About Us Orders and Returns</li>
                        <li>Contact Us</li>
                    </ul>



                </div>
                <div className='w-1/4'>
                    <h3 className='py-2 ' >CUSTOMER SUPORT</h3>
                    <ul className='py-2 text-sm '>

                        <li>Help & FAQs</li>
                        <li>Shipping Policy</li>
                        <li>Returns Policy</li>

                    </ul>



                </div>
                <div className='w-1/4'>
                    <h3 className='py-2 ' >CONTACT US</h3>
                    <ul>
                        <li>Giza, Egypt</li>
                        <li>0111501200</li>
                        <li>two icion</li>
                    </ul>



                </div>
                <div className='w-1/4'>
                    <h3 className='py-2 ' >SUBSCRIBE US</h3>
                    <ul>
                        {/* <p>&#8594;</p> */}
                        <li>
                            <input
                                placeholder='Enter Your Email'
                                className='border 

                                  text-sm py-1 px-2 bg-transparent
                             outline-none '
                                type="text" />
                        </li>

                    </ul>



                </div>
            </div>
        </div>
    )
}
