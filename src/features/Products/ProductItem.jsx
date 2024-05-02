
import Rating from './../../Components/Rating';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utilities/helpres'
import { trimTitle } from '../../utilities/helpres'
import { FaShoppingCart } from 'react-icons/fa';
import useAddProduct from '../cart/useAddProduct';
import Button from '../../Components/Button';
import useAddToWhislist from '../wishlist/useAddToWhislist';
import useDeleteWishlist from '../wishlist/useDeleteWishlist';
import Favourite from '../../Components/Favourite';

export default function ProductItem({ product, className = '', wishlistItems }) {



  const { title, price, imageCover, ratingsAverage, _id } = product

  const { addProduct, status } = useAddProduct()
  const { mutate: addToWishList, status: addToWishListStatus } = useAddToWhislist()
  const { mutate: deleteFromWishlist, status: deleteFromWishlistStatus } = useDeleteWishlist()
  const isLoading = status === "pending"
  const isFav = wishlistItems?.some(item => item._id === _id)



  function handleAddToWishList(id) {
    addToWishList({ productId: id })
  }


  function handleDeleteFromWishlist(id) {
    deleteFromWishlist(id)
  }



  return (

    <div className={`product-item " + ${className}`} >


      <Link to={`/products/productinfo/${_id}`}>
        <div className="relative group cursor-pointer">
          <p className='product-hover'>Show Details</p>
          <img src={imageCover} className='product-image' loading='lazy' alt="" />
          <i className='cart-icon'><FaShoppingCart className='text-2xl text-primary' /></i>
        </div>
      </Link>

      <Favourite addToWishListStatus={addToWishListStatus} deleteFromWishlistStatus={deleteFromWishlistStatus} _id={_id} handleAddToWishList={handleAddToWishList} handleDeleteFromWishlist={handleDeleteFromWishlist} isFav={isFav} />


      <div className='pt-3 px-2 pb-3 bg-primary-2 rounded-lg '>
        <h3 className='text-pimary text-title'>{trimTitle(title)}</h3>
        <div className='flex justify-between items-center  '>
          <p className='text-sm'>{formatPrice(price)}</p>
          <Rating rating={ratingsAverage} />
        </div>

        <Button isLoading={isLoading} onclick={() => { addProduct(_id) }} textContent={"Add To Cart"} styles={'w-full bg-primary text-white '} />
      </div>


    </div >



  )
}
