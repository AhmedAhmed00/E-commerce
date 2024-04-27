import { useSearchParams } from "react-router-dom"
import { ShopSpecifications } from "../features/shop/ShopSpecifications"
import LoaderSpinner from './../Components/LoaderSpinner';
import Button from './../Components/Button';
import Row from './../features/Products/ProductsRow';
import useProducts from './../features/Products/useProducts';



export default function Shop() {


    const [searchParams, setSearchParams] = useSearchParams()

    const { isError, isLoading, isFetching, status, data: { data: products, metadata: { nextPage, prevPage, numberOfPages, currentPage } = {} } = {} } = useProducts("10")


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
            <div className='container flex justify-between gap-6'>
                <ShopSpecifications handleSpecificationsChange={handleSpecificationsChange} />

                <div className='flex-1 py-6  '>

                    <div className='flex justify-between mb-6'>
                        <h2 className='text-3xl  text-primary'>Featured Products</h2>
                        <div className='flex items-center gap-2' >
                            <label htmlFor="sort" className='text-sm text-gray-700'>Sort Price</label>
                            <select onChange={handleSpecificationsChange} className='rounded-lg  px-2 py-1 border' name="sort" id="sort">
                                <option value="">Not sorted</option>
                                <option value="price">Ascending</option>
                                <option value="-price">Descending </option>
                            </select>
                        </div>
                    </div>

                    {isFetching || isLoading ? <LoaderSpinner /> : products.length ?
                        <div>


                            <Row items={products} />
                            <div className='flex w-fit gap-3  container mt-2  '>
                                <Button onclick={handlePrev}
                                    disabled={currentPage === 1}
                                    textContent={'Prev'} styles={`text-white px-4 py-1 ${currentPage === 1 && 'bg-gray-400'}  `} />
                                <Button disabled={currentPage === numberOfPages} onclick={handleNext}
                                    textContent={'Next'}
                                    styles={`text-white  px-4 py-1
                            ${currentPage === numberOfPages && 'bg-gray-400'}  `} />
                            </div>

                        </div>
                        :
                        <div className='grid'>
                            <p className='text-2xl'>Sorry, These specifications is not available right now </p>
                        </div>}









                </div>





            </div>




        </>





    )
}














