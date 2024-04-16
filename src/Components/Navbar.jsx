import Searchbar from './Searchbar';
import { useAuth } from '../Context/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import useCart from '../features/cart/useCart';


export default function Navbar() {
  const { accessToken, logout } = useAuth()

  const { cart } = useCart()


  return (
    <nav className='border-b py-3 sticky -top-1 z-50   bg-[#313133] font-bold'>
      <div className="container flex justify-between items-center">
        <div>
          <h2 className='text-2xl font-bold text-white'>
            Logo
          </h2>
        </div>

        <ul className='flex gap-5 text-white'>
          {accessToken ? <>

            <NavLink className='' to={'/home'}>Home</NavLink>
            <NavLink className='' to='' onClick={() => { logout() }} >Logout</NavLink >
            <NavLink to={'/cart'} className='relative '>Cart <span class="bg-red-100 absolute left-[100%] -top-[10px] text-primary text-xs font-medium me-2 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">{cart?.numOfCartItems || "0"}</span>
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
