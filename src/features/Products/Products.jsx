
import Row from './../../Components/Row';
import Error from './../../Components/Error';
import useProducts from './useProducts';






export default function Produtcs() {

    const { products, isLoading, isError } = useProducts()



    return (

        <>
            {isError ? <Error message={"Error while fetching"} /> : <Row items={products} />}
        </>
    )
}





