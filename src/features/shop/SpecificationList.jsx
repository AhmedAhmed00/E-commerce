import React, { useState } from 'react';
import { SpecificationHeader } from './Filter';

export default function SpecificationList({ type, name, handleSpecificationsChange, text }) {

    const [isShown, setIsShown] = useState(true);

    return (

        <div className='my-2 text-sm'>
            <SpecificationHeader isShown={isShown} setIsShown={setIsShown} title={text} />

            <div>
                {isShown && <div>
                    <div className='flex items-center gap-2   '>
                        <input
                            className='cursor-pointer justify-center w-4 h-4 my-2 border border-primary rounded-full'
                            onChange={handleSpecificationsChange}
                            name={name}
                            value={type.id}
                            id={type.name}
                            type="radio" />
                        <label className='cursor-pointer' htmlFor={type.name}>All</label>
                    </div>

                    {type.map(type => <div key={type._id} className='  flex items-center gap-2   '>
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

                </div>}



            </div>

        </div>

    );




}
