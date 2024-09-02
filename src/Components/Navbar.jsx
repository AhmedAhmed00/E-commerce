import { useAuth } from "../Context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import useCart from "../features/cart/useCart";
import { RxHamburgerMenu } from "react-icons/rx";
import { memo, useEffect, useState } from "react";
import { NavLinks } from "./NavLinks";
import Logo from "../../public/logo2.png";

import NavIcons from "./NavIcons";

function Navbar() {
  const { cart: { numOfCartItems } = {}, isError, isLoading } = useCart();
  const [showNav, setShowNav] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setShowNav(false);
  }, [pathname]);

  const { accessToken, logout } = useAuth();

  return (
    <nav
      className="light:border-b bg-primary-2  sticky -top-1 z-50 
     dark:text-white
     bg-nav shadow-md  text-primary font-bold"
    >
      <div className="container py-3  relative flex justify-between  items-center ">
        <div className="xs:flex   xs:justify-between xs:items-center xs:w-full lg:w-auto lg:items-center">
          <Link to={"/home"} className="w-[160px]">
            <img className="w-full" src={Logo} alt="" />
          </Link>
          <RxHamburgerMenu
            onClick={() => setShowNav((show) => !show)}
            className="text-4xl p-1 cursor-pointer border border-black rounded-lg lg:hidden"
          />
        </div>

        <div>
          <NavLinks
            showNav={showNav}
            setShowNav={setShowNav}
            accessToken={accessToken}
            isError={isError}
            logout={logout}
            isLoading={isLoading}
            numOfCartItems={numOfCartItems}
          />
        </div>
        <div className="xs:hidden lg:block">
          <NavIcons accessToken={accessToken} logout={logout} />
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);
