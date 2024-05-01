import React from 'react'
import CategoryItem from './CategoryItem'

export default function Categories({ categories }) {



    return (



        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 container'>

            {categories?.map(category => <CategoryItem key={category._id} item={category} />)}
        </div>






    )
}
