import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../Services/CategoriesApi';
import { Link } from 'react-router-dom';
import useCategories from '../features/categories/useCategories';







export default function CategoriesHeader() {



    const { categories, isError, isLoading } = useCategories()







    return (
        <div className=' hidden  bg-primary-2 text-white lg:flex-1  list-none lg:flex lg:flex-col lg:justify-between font-semibold px-4 py-4 rounded-lg shadow-md'>
            {categories?.map(categoryItem => <li key={categoryItem._id} className='list underline hover:text-primary text-primary hover:transition  duration-150 '>
                <Link to={`/shop?category[in]=${categoryItem._id}`}>{categoryItem.name}</Link>
            </li>)}
        </div>
    )
}

