import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../Services/ProductsApi'
import Error from './Error';
import Row from './Row';

export default function Produtcs({ api }) {

    const { data: products, isLoading, status, isError } = useQuery(
        {
            queryKey: ["products"],
            queryFn: () =>
                getProducts()
            ,
        },
    )








    return (

        <>
            {isError ? <Error message={"Error while fetching"} /> : <Row items={products} />}
        </>
    )
}





