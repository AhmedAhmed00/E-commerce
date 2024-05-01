import React, { useState } from 'react';
import { ShowArrow } from './ShowArrow';

export default function SpecificationList({ type, name, handleSpecificationsChange, text }) {

    const [isShown, setIsShown] = useState(false);
    function handleIsShown() {
        setIsShown(shown => !shown);
    }

    return (

        <div className='my-2 text-sm '>
            <div className='flex items-center justify-between '>
                <h3 className='text-xl text-primary mb-2'>{text}</h3>
                <ShowArrow handleIsShown={handleIsShown} isShown={isShown} />
            </div>
            <div className=''>


                {isShown && <>
                    <div className='flex items-center gap-2  '>
                        <input
                            className='cursor-pointer justify-center w-4 h-4 my-2 border border-primary rounded-full'
                            onChange={handleSpecificationsChange}
                            name={name}
                            value=''
                            id={type.name}
                            type="radio" />
                        <label className='cursor-pointer' htmlFor={type.name}>All</label>
                    </div>

                    {type.map(type => <div key={type._id} className='flex items-center gap-2   '>
                        <input
                            className='cursor-pointer justify-center w-4 h-4 my-2 border border-primary rounded-full'
                            onChange={handleSpecificationsChange}
                            name={name}
                            value={type._id}
                            id={type.name}
                            type="radio" />
                        <label className='cursor-pointer' htmlFor={type.name}>{type.name}</label>
                    </div>

                    )}

                </>}



            </div>

        </div>

    );




}
