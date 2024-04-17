import Searchbar from './Searchbar';
import { useAuth } from '../Context/AuthContext';
import { Link, NavLink } from 'react-router-dom';
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

        <ul className='flex gap-5 items-center     '>
          {accessToken ? <>

            <NavLink className='' to={'/home'}>Home</NavLink>
            <NavLink className='' to={'/order/payment'}>Payment</NavLink>
            <NavLink className='' to='' onClick={() => { logout() }} >Logout</NavLink >
            <NavLink to={'/cart'} className='relative '>
              Cart
              <span class="
              bg-green-800 absolute left-[100%] 
              -top-[10px]  text-xs
             font-medium me-2 px-1.5 py-0.5 rounded
            
              text-white
                border
               ">{isLoading ? "..." : isError ? 0 : numOfCartItems} </span>
            </NavLink>
          </> :
            <>

              <NavLink className='' to={'/home'}>Home</NavLink>
              <NavLink className='' to={'/login'}>Login</NavLink>
              <NavLink className='' to={'/signup'}>Sign Up</NavLink>

            </>


          }

        </ul>

        <Searchbar />



      </div>




    </nav >
  )
}
