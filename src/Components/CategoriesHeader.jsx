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
        <div className=' hidden lg:flex-1 border-e  list-none lg:flex lg:flex-col  text-[#] lg:justify-between font-semibold p-5 rounded-md shadow-md'>
            {categories?.map(categoryItem => <li key={categoryItem._id} className='list'>
                <Link>{categoryItem.name}</Link>
            </li>)}
        </div>
    )
}

