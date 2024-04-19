
import Row from './../../Components/Row';
import Error from './../../Components/Error';
import useProducts from './useProducts';
import { useEffect, useState } from 'react';






export default function Produtcs() {



    const { products, isLoading, isError } = useProducts()


    return (

        <div className='container' >
            {isError ? <Error message={"Error while fetching"} /> : <Row items={products} />}
        </div>
    )
}





