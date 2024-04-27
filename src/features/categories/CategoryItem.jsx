import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItem({ item }) {

    const { image, name } = item
    return (


        <div className='
       group
       overflow-hidden
                         rounded-lg transition-transform
                         border border-black
                        shadow-md
                        relative
                          duration-300 hover:transform hover:-translate-y-3'>
            <Link to={`/shop?category[in]=${item._id}`} >
                <img className='w-full h-full  object-cover rounded-lg' src={image} alt="" />
                <p className='
  
                absolute
                 top-[50%]
                
                 w-full
            
                 text-white translate-x-[320px] 
                 text-center py-5 
                   group-hover:translate-x-[0] 
                    
               
                   duration-300
                    transition-all
                    bg-primary text-2xl '>{name}</p>
            </Link>

        </div>
    )
}
