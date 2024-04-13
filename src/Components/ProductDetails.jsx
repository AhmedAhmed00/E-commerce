import React, { useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getProducts, getSpecificProduct } from '../Services/ProductsApi';
import Rating from './Rating';
import { formatPrice } from '../utilities/helpres';
import { Link, useParams } from 'react-router-dom';
import ColorInput from './ColorInput';
import { toast } from 'react-hot-toast';
import { MdFavoriteBorder } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { TbRestore } from "react-icons/tb";
import Row from './Row';
import LoaderSpinner from './LoaderSpinner';







export default function ProductDetails() {

    const [fakeColor, setFakeColor] = useState("red")
    const [orderQuantity, setOrderQuantity] = useState(1)

    const mainImage = useRef()



    const { productId } = useParams()

    const [isOpenImage, setIsOpenImage] = useState("")

    const { isError, data: { images, subcategory, ratingsQuantity, title, _id, description, quantity, price, imageCover, category: { _id: categoryId, name } = {}, brand, ratingsAverage } = {}, isLoading
    } = useQuery({
        queryKey: ['product', productId],
        queryFn: () => getSpecificProduct(productId)
    })

    const { data: related } = useQuery({
        queryKey: ["related", categoryId],
        queryFn: () => getProducts({ "category": categoryId }),
        enabled: !!categoryId
    })



    function handleMainImageClick(img) {
        setIsOpenImage(img)
        console.log(isOpenImage);
    }


    function changeMainImage(src) {
        mainImage.current.src = src
    }
    function changeProductColor(color) {
        setFakeColor(color)
    }

    function handleDecreaseQuantity() {
        if (orderQuantity === 1) {
            toast.error("Cannot order zero items")
        }
        else {
            setOrderQuantity(counter => counter - 1)
        }

    }

    function handleIncreaseQuantity() {
        setOrderQuantity(counter => counter + 1)
    }








    return (

        <>



            {isLoading ? <LoaderSpinner /> : isError ? <div>Eroor</div> :
                <>


                    < div className='flex columns-3 gap-5  items-center my-8' >

                        <div className="  w-1/12 sticky top-0 ">
                            <div className='flex flex-col gap-5'>
                                {images.map(img => <img
                                    onClick={() => {
                                        changeMainImage(img)
                                    }} className='border shadow-sm rounded-md w-full max-h-[100px] object-cover' src={img} alt='' />)}
                            </div>

                        </div>


                        <img onClick={(e) => {
                            handleMainImageClick(e.target.src)
                        }} src={imageCover} ref={mainImage} alt="ImageCover" className=' border shadow-lg rounded-md object-contain object-top max-w-[600px] max-h-[600px]  flex-1 ' />





                        <div className='ps-8 self-start   '>
                            <h2 className='mb-1 text-4xl font-semibold text-red-700'>{title}</h2>
                            <Link href='/' className='font-semiboldtext-red-700  underline'>{name}</Link>
                            <p className='my-1'>Avalibale Quantity - <span className='text-green-500'>{quantity}</span> </p>

                            <div className='flex items-center'>
                                <Rating rating={ratingsAverage} />
                                <span className='text-sm'>({ratingsQuantity})</span>
                                <span className='px-1'>|</span>
                                <span className='text-green-500'>In Stock</span>
                            </div>

                            <p className='text-red-700 font-semibold my-2'>{formatPrice(price)}</p>
                            <p className='pb-3  border-b'>{description}</p>
                            <div>
                                <p className='pt-4'>Colors:
                                    <ColorInput color={"red"} fakeColor={fakeColor} changeProductColor={changeProductColor} />
                                    <ColorInput color={"green"} fakeColor={fakeColor} changeProductColor={changeProductColor} />
                                    <ColorInput color={"orange"} fakeColor={fakeColor} changeProductColor={changeProductColor} />                                    <ColorInput color={"blue"} fakeColor={fakeColor} changeProductColor={changeProductColor} />

                                </p>
                            </div>


                            <div className='flex gap-3  my-6 items-center '>

                                <div className='border-2 flex columns-3   justify-between rounded-md font-semibold'>

                                    <button className='px-2'
                                        onClick={() => handleDecreaseQuantity()}
                                    >-</button>

                                    <p className='px-6 py-1 border-e border-s' >{orderQuantity}</p>

                                    <button className='px-2 bg-red-600 rounded-e-md text-white'
                                        onClick={() => handleIncreaseQuantity()}
                                    >+</button>
                                </div>

                                <button className='px-8 py-1 shadow-lg flex-1  border bg-red-600 rounded-md text-white'>Buy Now</button>

                                <i className='border shadow-sm p-2 rounded-lg '><MdFavoriteBorder /></i>

                            </div>




                            <div className='border-2 shadow-sm'>
                                <div className='flex items-center p-5 border-b-2 '>
                                    <i className='text-2xl me-2'><GrDeliver /></i>
                                    <span>
                                        <p>Free Delivery</p>
                                        <p>Enter your postal code for Delivery Availability</p>
                                    </span>
                                </div>

                                <div className='flex items-center p-5'>
                                    <i className='text-2xl me-2'><TbRestore /></i>
                                    <span>
                                        <p>Resotre Delivery</p>
                                        <p>Free 30 Days Delivery Returns. Details</p>
                                    </span>
                                </div>





                                <div>

                                </div>

                            </div>




                        </div>


                    </div>


                    <h2 className='mb-2'>Related Items</h2>
                    <Row items={related} role='slider' />

                </>









            }




        </>







    )
}
