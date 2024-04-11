import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../Services/ProductsApi'
import Error from './Error';
import ProductItem from './ProductItem';

export default function Produtcs() {

    const { data: products, isLoading, status, isError } = useQuery(
        {
            queryKey: ["products"],
            queryFn: getAllProducts,
        },
    )










    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10'>
            {isError ? <Error message={"Error while fetching"} /> : products?.map((product) => <ProductItem product={product} key={product._id} />)}



        </div>
    )
}
