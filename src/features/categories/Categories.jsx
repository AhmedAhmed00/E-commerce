import React from 'react'
import useCategories from './useCategories'
import CategoryItem from './CategoryItem'

export default function Categories() {


    const { categories, isLoading } = useCategories()

    return (



        <div className='grid grid-cols-5 gap-5 container'>
            {categories?.map(category => <CategoryItem item={category} />)}
        </div>






    )
}
