import React from 'react';
import useCategories from '../categories/useCategories';
import useBrands from '../Brands/useBrands';
import SpecificationList from './SpecificationList';
import { Filter } from './Filter';
import { IoCloseCircleOutline } from 'react-icons/io5';



export function ShopSpecifications({ handleShowSpecList, showSpecifcaitonsList, handleSpecificationsChange, specifications, setSpecifications }) {

    const { categories } = useCategories();
    const { brands } = useBrands();

    return (

        <form className={`
        
        py-6 min-w-56 min-h-screen
         xs:fixed
        top-28
           bg-white dark:bg-primary-2 xs:z-30
        bottom-0
         z-50
        md:sticky
        transition-all duration-300 md:block  md:w-auto max-h-screen  px-4 border rounded-lg  overflow-y-scroll
         ${showSpecifcaitonsList ? ` xs:-left-[0%]` : `xs:-left-[100%]`}

         `}>
            <button type='button' onClick={handleShowSpecList} className=' w-full md:hidden '>
                <IoCloseCircleOutline fontSize={'30px'} className='m-auto' />
            </button>

            <Filter handleSpecificationsChange={handleSpecificationsChange} specifications={specifications} setSpecifications={setSpecifications} />
            {categories && <SpecificationList handleSpecificationsChange={handleSpecificationsChange} type={categories} name={'category[in]'} text={'Category'} />}
            {brands && <SpecificationList handleSpecificationsChange={handleSpecificationsChange} type={brands} name={'brand'} text={'Brand'} />}
        </form>



    );

}
