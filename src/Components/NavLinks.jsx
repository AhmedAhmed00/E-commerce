import { NavLink } from 'react-router-dom';

export function NavLinks({ accessToken, login, logout, numOfCartItems, isError, isLoading, showNav }) {
    return (
        <ul className={`
  
     xs:flex-col xs:h-screen 
     xs:p-10 xs:gap-5
     md:sticky md:p-0 md:gap-1
     xs:absolute xs:top-[100%]
     xs:right-0 xs:left-0
     xs:inset-0
     transition-all
     md:flex
     md:font-extrabold
     
    xs:bg-black xs:text-white gap-1 items-center 
     md:flex-row md:h-auto md:bg-transparent
      md:text-black
    ` + (showNav ? 'xs:flex' : 'xs:hidden')}>
            {accessToken ? <>
                <NavLink className='nav-item' to={'/home'}>Home</NavLink>
                <NavLink className='nav-item' to={'/allorders'}>Orders</NavLink>
                <NavLink className='nav-item' to={'/profile'}>Profile</NavLink>
                <NavLink className='nav-item' to={'/whishlist'}>Wishlist</NavLink>
                <NavLink className='nav-item' to={'/shop'}>Shop</NavLink>
                <NavLink className='nav-item' to='' onClick={() => { logout(); }}>Logout</NavLink>
                <NavLink to={'/cart'} className='nav-item relative '>
                    Cart
                    <span className=" bg-green-800
              rounded-lg
              absolute -top-[10px]  text-xs font-medium
              px-1.5 py-0.5  text-white  border
     ">{isLoading ? "..." : isError ? 0 : numOfCartItems} </span>
                </NavLink>
            </> :
                <>
                    <NavLink className='nav-item' to={'/home'}>Home</NavLink>
                    <NavLink className='nav-item' to={'/login'}>Login</NavLink>
                    <NavLink className='nav-item' to={'/signup'}>Sign Up</NavLink>
                </>}
        </ul>
    );
}
