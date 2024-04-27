import React from 'react';
import useCategories from '../categories/useCategories';
import useBrands from '../Brands/useBrands';
import SpecificationList from './SpecificationList';
import { Filter } from './Filter';

export function ShopSpecifications({ handleSpecificationsChange, specifications, setSpecifications }) {

    const { categories } = useCategories();
    const { brands } = useBrands();


    return (

        <form className=' py-6 px-3 border-e w-2/12 h-screen overflow-y-scroll '>
            <Filter handleSpecificationsChange={handleSpecificationsChange} specifications={specifications} setSpecifications={setSpecifications} />
            {categories && <SpecificationList handleSpecificationsChange={handleSpecificationsChange} type={categories} name={'category[in]'} text={'Category'} />}
            {brands && <SpecificationList handleSpecificationsChange={handleSpecificationsChange} type={brands} name={'brand'} text={'Brand'} />}
        </form>

    );

}
