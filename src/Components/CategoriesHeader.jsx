import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../Services/ProductsApi';
import { Link } from 'react-router-dom';

export default function CategoriesHeader() {
    const { data: categories, isError } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })
    // console.log(categories);




    return (
        <div className='flex-1  border-e  pt-10 list-none flex flex-col justify-between font-semibold'>
            {categories?.map(categoryItem => <li key={categoryItem._id} className='list mb-2 '>
                <Link>{categoryItem.name}</Link>
            </li>)}
        </div>
    )
}

