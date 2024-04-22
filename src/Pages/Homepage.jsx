
import { IoRocket } from 'react-icons/io5';
import { FaMapMarkedAlt, FaShuttleVan } from 'react-icons/fa';
import { GiBoxUnpacking } from 'react-icons/gi';


import SectionHeader from '../Components/SectionHeader'
import useCategories from '../features/categories/useCategories';
import Header from './../Components/Header';
import useBrands from '../features/Brands/useBrands';
import LoaderSpinner from '../Components/LoaderSpinner';
import React, { Suspense } from 'react';
import Section from '../Components/Section';
import Categories from '../features/categories/Categories';
import OurSevices from '../Components/OurSevices';
import Produtcs from '../features/Products/Products';



export default function Homepage() {

    const { isLoading: brandsLoading } = useBrands()
    const { isLoading: categoriesLoading } = useCategories()

    return (
        <>


            {brandsLoading && categoriesLoading ? <LoaderSpinner /> : <>


                <Section >
                    <Header />
                </Section>




                {/* bg={'bg-[#fbece3]'} */}

                <SectionHeader redContent={"Our Items"} textContent={"Best Products For You"} />

                <Section  >


                    <Produtcs />

                </Section>

                <SectionHeader textContent={'Explore Our Categories'} />
                <Section >
                    <Categories />
                </Section>




                <SectionHeader textContent={'Variety of Services'} />


                <Section >
                    <OurSevices />
                </Section>



            </>}




        </>
    )
}


