
import React from "react";
import SliderContainer from "./SliderContainer";
import ProductItem from '../features/Products/ProductItem';







export default function Row({ items, role = "row" }) {

    const productsToShow = items?.slice(3, 13)

    return (


        <>

            {role === "row" && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 '>
                {productsToShow?.map((product) => <ProductItem product={product} key={product._id} />)}
            </div>}
            {role === "slider" &&


                <SliderContainer draggable={false} slidesToShow={5} slidesToScroll={2} >
                    {productsToShow?.map((product) => <ProductItem product={product} key={product._id} className={'las'} />)}
                </SliderContainer>



            }

        </>




    )
}














// import React from 'react'
// import ProductItem from './../features/Products/ProductItem';



// export default function Row() {



//     return (
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3'>
//             <div className='h-52 bg-red-300 relative'>
//                 <img src="../../public/assets/slider-image-2.jpeg" className='w-full h-full object-cover' alt="" />
//                 <h3 className='bg-slate-500 absolute bottom-0 left-0 right-0'>Name</h3>
//             </div>
//             <div className='h-52 bg-red-300 relative'>
//                 <img src="../../public/assets/slider-image-2.jpeg" className='w-full h-full object-cover' alt="" />
//                 <h3 className='bg-slate-500 absolute bottom-0 left-0 right-0'>Name</h3>
//             </div>
//             <div className='h-52 bg-red-300 relative'>
//                 <img src="../../public/assets/slider-image-2.jpeg" className='w-full h-full object-cover' alt="" />

//                 <h3 className='bg-slate-500 absolute bottom-0 left-0 right-0'>Name</h3>
//             </div>
//             <div className='h-52 bg-red-300 relative'>
//                 <img src="../../public/assets/slider-image-2.jpeg" className='w-full h-full object-cover' alt="" />

//                 <h3 className='bg-slate-500 absolute bottom-0 left-0 right-0'>Name</h3>
//             </div>
//             <div className='h-52 bg-red-300 relative'>
//                 <img src="../../public/assets/slider-image-2.jpeg" className='w-full h-full object-cover' alt="" />

//                 <h3 className='bg-slate-500 absolute bottom-0 left-0 right-0'>Name</h3>
//             </div>
//             <div className='h-52 bg-red-300 relative'>
//                 <img src="../../public/assets/slider-image-2.jpeg" className='w-full h-full object-cover' alt="" />

//                 <h3 className='bg-slate-500 absolute bottom-0 left-0 right-0'>Name</h3>
//             </div>
//             <div className='h-52 bg-red-300 relative'>
//                 <img src="../../public/assets/slider-image-2.jpeg" className='w-full h-full object-cover' alt="" />

//                 <h3 className='bg-slate-500 absolute bottom-0 left-0 right-0'>Name</h3>
//             </div>



//         </div>
//     )
// }
