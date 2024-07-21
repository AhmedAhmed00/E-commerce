import Searchbar from './Searchbar';
import { useAuth } from '../Context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import useCart from '../features/cart/useCart';
import { RxHamburgerMenu } from 'react-icons/rx';
import { memo, useEffect, useState } from 'react';
import { NavLinks } from './NavLinks';
import Logo from '../../public/logo2.png'
import { useDarkMode } from '../Context/ModeContext';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BsMoonStars } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutBoxLine } from 'react-icons/ri';


function Navbar() {
  const { cart: { numOfCartItems } = {}, isError, isLoading } = useCart()
  const [showNav, setShowNav] = useState(false)

  const { pathname } = useLocation();

  useEffect(() => {
    setShowNav(false)
  }, [pathname]);


  const { accessToken, logout } = useAuth()

  const { isDark, toggleDarkMode } = useDarkMode()

  // [#f2f8fd]

  return (



    <nav className='light:border-b bg-primary-2  sticky -top-1 z-50 
     dark:text-white
     bg-nav shadow-md  text-primary font-bold'>
      <div className="container py-3  relative flex justify-between  items-center ">



        <div className='xs:flex   xs:justify-between xs:items-center xs:w-full md:w-auto md:items-center'>
          <Link to={'/home'} className='w-[160px]'>
            <img className='w-full' src={Logo} alt="" />
          </Link>
          <RxHamburgerMenu onClick={() => setShowNav(show => !show)} className='text-4xl p-1 cursor-pointer border border-black rounded-lg md:hidden' />
        </div>
        <div >
          <NavLinks showNav={showNav} setShowNav={setShowNav} accessToken={accessToken} isError={isError} logout={logout} isLoading={isLoading} numOfCartItems={numOfCartItems} />
        </div>





        <div className='xs:hidden lg:flex gap-4  items-center '>
          <Searchbar />



          <button >
            {isDark ?
              <MdOutlineWbSunny
                fontSize={'24px'} onClick={toggleDarkMode} className='text-2xl text-title' />
              : <BsMoonStars fontSize={'24px'} onClick={toggleDarkMode} className='text-2xl text-primary' />}
          </button>

          <Link to={'/profile'}>
            <CgProfile fontSize={'24px'} />
          </Link>

          <button to='' onClick={() => { logout() }}>
            <RiLogoutBoxLine className='text-red-500' fontSize={'24px'} />
          </button>



        </div>


      </div>
    </nav >
  )
}


export default memo(Navbar)