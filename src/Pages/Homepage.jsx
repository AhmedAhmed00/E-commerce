import React from 'react'
import SectionHeader from '../Components/SectionHeader'
import Header from './../Components/Header';
import Produtcs from './../features/Products/Products';
import useBrands from '../features/Brands/useBrands';
import useProducts from '../features/Products/useProducts';
import LoaderSpinner from '../Components/LoaderSpinner';
import { IoRocket } from 'react-icons/io5';
import { FaMapMarkedAlt, FaShuttleVan } from 'react-icons/fa';
import { GiBoxUnpacking } from 'react-icons/gi';
import useCategories from '../features/categories/useCategories';
import useCategory from '../features/categories/useCategory';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../Services/ProductsApi';


export default function Homepage() {

    const { isLoading: brandsLoading } = useBrands()
    const { isLoading: proudctsLoading } = useProducts()
    const { categories, isLoading: categoriesLoading } = useCategories()




    console.log(categories);


    return (
        <>
            {brandsLoading && proudctsLoading && categoriesLoading ? <LoaderSpinner /> : <>
                <Header />



                <SectionHeader redContent={"Our Items"} textContent={"Best Products For You"} />

                <Produtcs />


                <SectionHeader textContent={'Explore Our Categories'} />


                <div className='grid grid-cols-5 gap-5'>
                    {categories?.map(category =>
                        <div className='relative overflow-hidden
                         rounded-lg shadow-sm transition-transform
                         hover:skew-x-2
                          duration-300 hover:transform hover:-translate-y-3'>
                            <img className='w-full h-full object-cover' src={category.image} alt="" />

                        </div>
                    )}
                </div>




                <SectionHeader textContent={'Variety  of Services'} />


                <div className='mt-10 grid grid-cols-2  gap-5 mb-6'>

                    <img className='rounded-lg shadow-sm' src="../../public/assets/banner-1.jpg" alt="" />

                    <img className='rounded-lg shadow-sm' src="../../public/assets/banner-2.jpg" alt="" />

                </div>

                <div className='grid grid-cols-4 text-center bg-primary-3  mb-10'>
                    <div className='flex  flex-col columns-2 py-4   round mb- px-4 items-center   '>
                        <i className=''><IoRocket className='w-14 h-14 mb-2 me-4 bg-primary text-white p-2 rounded-full' />
                        </i>
                        <div>
                            <h3>
                                Fast & Free Shipping</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>

                    </div>
                    <div className='flex flex-col columns-2  py-4   px-4 items-center   '>
                        <i className=' '><FaShuttleVan className='w-14 h-14 mb-2 me-4 bg-primary text-white p-2 rounded-full' />
                        </i>
                        <div>
                            <h3>
                                Fast & Free Shipping</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>

                    </div>
                    <div className='flex flex-col columns-2 py-4   px-4  items-center    '>
                        <i className=''><GiBoxUnpacking className='w-14 h-14 mb-2 me-4 bg-primary text-white p-2 rounded-full' />
                        </i>
                        <div>
                            <h3>
                                Fast & Free Shipping</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>

                    </div>
                    <div className='flex flex-col columns-2 py-4   px-4 items-center   '>
                        <i className=''><FaMapMarkedAlt className='w-14 h-14 mb-2 me-4 bg-primary text-white p-2 rounded-full' />
                        </i>
                        <div>
                            <h3>
                                Fast & Free Shipping</h3>
                            <p>Lorem ipsum dolor sit amet consectetur </p>
                        </div>

                    </div>
                </div>





            </>}


        </>
    )
}


