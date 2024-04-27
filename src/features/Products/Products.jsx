
import Row from './ProductsRow';
import Error from './../../Components/Error';
import useProducts from './useProducts';
import useWishlist from '../wishlist/useWishlist';






export default function Produtcs() {



    const { data: { data: products } = {}, isLoading, isError } = useProducts({})
    const { wishlist } = useWishlist()




    return (

        <div className='container ' >
            {isError ? <Error message={"Error while fetching"} /> :

                <Row role='slider' items={products} />


            }
        </div>
    )
}





