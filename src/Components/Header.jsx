import React from 'react'
import CategoriesHeader from './CategoriesHeader'

import useBrands from '../features/Brands/useBrands';
import Brands from './../features/Brands/Brands';
import HeaderImages from './HeaderImages';

export default function Header({ categories, brands }) {

    return (

        <header className='container py-6' >
            <div className="flex flex-nowrap justify-between gap-6 ">
                <CategoriesHeader categories={categories} />
                <HeaderImages />
            </div>

            <Brands brands={brands} />



        </header >
    )
}
