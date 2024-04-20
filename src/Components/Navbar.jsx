import Searchbar from './Searchbar';
import { useAuth } from '../Context/AuthContext';
import { NavLink } from 'react-router-dom';
import useCart from '../features/cart/useCart';


export default function Navbar() {
  const { cart: { numOfCartItems } = {}, isError, isLoading } = useCart()

  const { accessToken, logout } = useAuth()

  // 313133

  return (
    <nav className='border-b py-3 sticky -top-1 z-50   bg-[#f2f8fd] shadow-md mb-6 text-primary font-bold'>
      <div className="container flex justify-between items-center">
        <div>
          <h2 className='text-2xl font-bold '>
            Logo
          </h2>
        </div>

        <ul className='flex gap-1 items-center     '>
          {accessToken ? <>

            <NavLink className='px-2 py-0.5' to={'/home'}>Home</NavLink>
            <NavLink className='px-2 py-0.5' to={'/order/payment'}>Payment</NavLink>
            <NavLink className='px-2 py-0.5' to={'/orders'}>Orders</NavLink>
            <NavLink className='px-2 py-0.5' to={'/profile'}>Profile</NavLink>
            <NavLink className='px-2 py-0.5' to='' onClick={() => { logout() }} >Logout</NavLink >
            <NavLink to={'/cart'} className=' px-2 py-0.5 relative '>
              Cart
              <span className=" bg-green-800
              rounded-lg
              absolute -top-[10px]  text-xs font-medium
              px-1.5 py-0.5  text-white  border
     ">{isLoading ? "..." : isError ? 0 : numOfCartItems} </span>
            </NavLink>
          </> :
            <>

              <NavLink className='px-2 py-0.5' to={'/home'}>Home</NavLink>
              <NavLink className='px-2 py-0.5' to={'/login'}>Login</NavLink>
              <NavLink className='px-2 py-0.5' to={'/signup'}>Sign Up</NavLink>

            </>


          }

        </ul>

        <Searchbar />



      </div>




    </nav >
  )
}
