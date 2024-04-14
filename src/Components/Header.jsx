import CustomArrows from '../Components/Slider';
import CategoriesHeader from './CategoriesHeader';
import SliderContainer from './SliderContainer';
import useBrands from '../features/Brands/useBrands';
import BrandItem from '../features/Brands/BrandItem';




export default function Header() {

    const { brands } = useBrands()


    return (



        <header className='bg-[url(../../public/assets/slider-2.jpeg)] bg-cover bg-center header  relative mb-10 md:bg-[url()]' >
            <div className="content  pt-6 hidden md:block md:container">
                <div className=" flex flex-nowrap justify-between gap-8 ">
                    <CategoriesHeader />
                    <div className=' md:w-full lg:w-10/12 m-auto  h-[100%!important] '>
                        <SliderContainer slidesToShow={1} slidesToScroll={1} draggable={true} isResponsive={false} >
                            <div>
                                <img src="../../public/assets/iphone.png" alt="" className='background-image' />
                            </div>
                            <div>
                                <img src="../../public/assets/slider-2.jpeg" alt="" />
                            </div>
                            <div>
                                <img src="../../public/assets/slider-3.jpeg" alt="" />
                            </div>
                            <div>
                                <img src="../../public/assets/slider-2.jpeg" alt="" />
                            </div>
                            <div>
                                <img src="../../public/assets/slider-2.jpeg" alt="" />
                            </div>
                            <div>
                                <img src="../../public/assets/slider-2.jpeg" alt="" />
                            </div>
                        </SliderContainer>
                    </div>
                </div>

                <SliderContainer slidesToShow={9} slidesToScroll={2} draggable={false} isResponsive={true} className='rounded-full py-4 px-14 w-full'>
                    {brands?.map(brand =>
                        <BrandItem brand={brand} />
                    )}
                </SliderContainer>



            </div>


        </header >









    )
}
