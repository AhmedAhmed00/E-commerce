
import ProductItem from './ProductItem';
import useWishlist from "../wishlist/useWishlist";
import SliderContainer from "../../Components/SliderContainer";
import useCart from '../cart/useCart';


export default function ProductsRow({ items, role = "row", resbonsiveStyles }) {


    const { wishlist: { data: wishlistItems } = {} } = useWishlist()
    const { cart } = useCart()




    return (

        <>
            {role === "row" && <div className={`gap-5  ` + resbonsiveStyles}>
                {items?.map((product) => <ProductItem cart={cart}
                    wishlistItems={wishlistItems} product={product} key={product._id} />)}


            </div>}



            {role === "slider" &&
                <SliderContainer className={'products mt-[-18px]'} draggable={false} slidesToShow={5} slidesToScroll={2} isResponsive={true} >
                    {items?.map((product) => <ProductItem cart={cart} wishlistItems={wishlistItems} product={product} key={product._id} className={'mx-2 '} />)}
                </SliderContainer>




            }

        </>




    )
}







