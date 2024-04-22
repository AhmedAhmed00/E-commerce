// import CustomArrows from '../Components/Slider';
import CategoriesHeader from './CategoriesHeader';
import SliderContainer from './SliderContainer';
import useBrands from '../features/Brands/useBrands';
import BrandItem from '../features/Brands/BrandItem';
import useCart from '../features/cart/useCart';




export default function Header() {




    const { brands } = useBrands()


    return (

        <header className='container' >

            <div className="flex   flex-nowrap justify-between gap-6 ">
                <CategoriesHeader />
                <div className='md:w-full lg:w-10/12'>

                    <SliderContainer slidesToShow={1} slidesToScroll={1} draggable={true} isResponsive={false} >

                        <div >
                            <img src="../../public/assets/slider-2.jpeg" alt="" className='rounded-xl' />
                        </div>

                        <div >
                            <img src="../../public/assets/slider-2.jpeg" alt="" className='rounded-xl' />
                        </div>

                    </SliderContainer>





                </div>
            </div>




            <SliderContainer slidesToShow={9} slidesToScroll={2} draggable={false} isResponsive={true} className='mt-6 py-4 px-14 w-full bg-primary-2   rounded-lg shadow-sm divide-transparent'>
                {brands?.map(brand =>
                    <BrandItem brand={brand} key={brand._id} />
                )}
            </SliderContainer>





        </header >









    )
}
