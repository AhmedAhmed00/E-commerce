import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../Services/ProductsApi';
import { Link } from 'react-router-dom';

export default function CategoriesHeader() {
    const { data: categories, isError } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })





    return (
        <div className=' hidden lg:flex-1 border border-black list-none lg:flex lg:flex-col lg:justify-between font-semibold px-5 py-2 rounded-sm shadow-md'>
            {categories?.map(categoryItem => <li key={categoryItem._id} className='list underline hover:text-primary hover:transition duration-150 '>
                <Link>{categoryItem.name}</Link>
            </li>)}
        </div>
    )
}

