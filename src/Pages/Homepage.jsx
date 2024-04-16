import React from 'react'
import SectionHeader from '../Components/SectionHeader'
import Header from './../Components/Header';
import Produtcs from './../features/Products/Products';
import useBrands from '../features/Brands/useBrands';
import useProducts from '../features/Products/useProducts';
import LoaderSpinner from '../Components/LoaderSpinner';
import { useCategoties } from '../Components/CategoriesHeader';


export default function Homepage() {

    const { isLoading: brandsLoading } = useBrands()
    const { isLoading: proudctsLoading } = useProducts()
    const { isLoading: categoriesLoading } = useCategoties()




    return (
        <>
            {brandsLoading && proudctsLoading && categoriesLoading ? <LoaderSpinner /> : <>
                <Header />
                <SectionHeader />
                <Produtcs />

            </>}


        </>
    )
}


