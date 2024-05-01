import React from 'react';
import useCategories from '../categories/useCategories';
import useBrands from '../Brands/useBrands';
import SpecificationList from './SpecificationList';
import { Filter } from './Filter';

export function ShopSpecifications({ handleSpecificationsChange, specifications, setSpecifications }) {

    const { categories } = useCategories();
    const { brands } = useBrands();


    return (

        <form className='py-6 xs:w-full   md:w-4/12 lg:w-3/12  max-h-screen    overflow-y-scroll px-4 border rounded-lg '>
            <Filter handleSpecificationsChange={handleSpecificationsChange} specifications={specifications} setSpecifications={setSpecifications} />
            {categories && <SpecificationList handleSpecificationsChange={handleSpecificationsChange} type={categories} name={'category[in]'} text={'Category'} />}
            {brands && <SpecificationList handleSpecificationsChange={handleSpecificationsChange} type={brands} name={'brand'} text={'Brand'} />}
        </form>

    );

}
