import React from 'react'
import Row from '../features/Products/ProductsRow'
import LoaderSpinner from '../Components/LoaderSpinner'
import Button from '../Components/Button'

const responsiveStyles = 'grid xs-grid-cols-1  md:grid-cols-2 lg:grid-cols-3'


export default function ShopItems({ isFetching, isLoading, products, handlePrev, numberOfPages, currentPage, handleNext }) {


    return (
        <>
            {isFetching || isLoading ? <LoaderSpinner /> : products.length ?
                <div>


                    <Row items={products} resbonsiveStyles={responsiveStyles} />
                    <div className='flex w-fit gap-3  container mt-2  '>
                        <Button onclick={handlePrev}
                            disabled={currentPage === 1}
                            textContent={'Prev'} styles={`text-white px-4 py-1 ${currentPage === 1 ? 'bg-gray-400' : "bg-primary"} `} />
                        <Button disabled={currentPage === numberOfPages} onclick={handleNext}
                            textContent={'Next'}
                            styles={`text-white  px-4 py-1
                            ${currentPage === numberOfPages ? 'bg-gray-400' : "bg-primary"}  `} />
                    </div>

                </div>
                :
                <div className='grid'>
                    <p className='text-2xl'>Sorry, These specifications are not available right now </p>
                </div>}
        </>
    )
}
