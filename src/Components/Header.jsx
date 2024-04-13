import React from 'react'
import CustomArrows from '../Components/Slider';
import CategoriesHeader from './CategoriesHeader';

export default function Header() {
    return (



        <header className="header   ">
            <div className="content flex flex-nowrap justify-between gap-8 container">
                <CategoriesHeader />
                <div className='w-9/12'>
                    <CustomArrows />
                </div>
            </div>


        </header>







    )
}
