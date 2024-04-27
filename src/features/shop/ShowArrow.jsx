import React from 'react';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';

export function ShowArrow({ isShown, handleIsShown }) {

    return <>

        {isShown ? <IoIosArrowDown onClick={handleIsShown} className='text-xl cursor-pointer' /> : <IoIosArrowBack onClick={handleIsShown} className='text-xl cursor-pointer' />}

    </>;
}
