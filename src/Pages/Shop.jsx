import { useSearchParams } from "react-router-dom"
import { ShopSpecifications } from "../features/shop/ShopSpecifications"
import useProducts from './../features/Products/useProducts';
import ShopHaeder from "../features/shop/ShopHaeder";
import ShopItems from "./ShopItems";



export default function Shop() {


    const [searchParams, setSearchParams] = useSearchParams()

    const { isError, isLoading, isFetching, data: { data: products, metadata: { nextPage, prevPage, numberOfPages, currentPage } = {} } = {} } = useProducts("6")


    function handleSpecificationsChange(e) {
        const { name, value } = e.target
        searchParams.set("page", 1)
        searchParams.set(name, value)
        setSearchParams(searchParams)
    }


    function handleNext() {

        if (nextPage) {
            window.scrollTo(0, 0)
            searchParams.set("page", nextPage)
            setSearchParams(searchParams)
        }

    }

    function handlePrev() {
        if (prevPage) {
            window.scrollTo(0, 0)
            searchParams.set("page", prevPage)
            setSearchParams(searchParams)
        }
    }





    return (

        <>
            {isError ? <div>errrrrrrrrrr</div> :

                <div className='container flex xs:flex-wrap md:justify-between  py-6 gap-6'>
                    <ShopSpecifications handleSpecificationsChange={handleSpecificationsChange} />
                    <div className='flex-1'>
                        <ShopHaeder handleSpecificationsChange={handleSpecificationsChange} />
                        <ShopItems currentPage={currentPage} handlePrev={handlePrev}
                            handleNext={handleNext} numberOfPages={numberOfPages} products={products}
                            isFetching={isFetching} isLoading={isLoading} />
                    </div>

                </div>
            }





        </>





    )
}














