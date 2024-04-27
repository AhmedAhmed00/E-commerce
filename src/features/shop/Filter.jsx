import React, { useState } from 'react';
import { ShowArrow } from './ShowArrow';

export function Filter({ handleSpecificationsChange }) {
    const [isShown, setIsShown] = useState(true);
    function handleIsShown() {
        setIsShown(shown => !shown);
    }


    return (
        <div>
            <div className='flex justify-between'>
                <h3 className='text-xl mb-2'>Filter</h3>
                <ShowArrow isShown={isShown} handleIsShown={handleIsShown} />
            </div>

            {isShown && <div className='flex gap-2 items-center text-sm mb-2'>
                <label htmlFor="price[gte]">From</label>
                <input onChange={handleSpecificationsChange} placeholder='$0' className='rounded-lg border shadow-sm w-12 px-2 py-1 ' type="text" name="price[gte]" id="price[gte]" />
                <label htmlFor="price[lte]">To</label>
                <input onChange={handleSpecificationsChange} placeholder='$0' className='rounded-lg border shadow-sm w-12 px-2 py-1 ' type="text" name="price[lte]" id="price[lte]" />
            </div>}
        </div>
    );
}
