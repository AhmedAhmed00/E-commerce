import { CgClose } from "react-icons/cg";

import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const xsStylse = `xs:flex-col xs:h-screen 
     xs:p-10
     xs:gap-5
     lg:sticky lg:p-0 lg:gap-1
     xs:fixed
     xs:flex
     z-10
     xs:top-0
     xs:bottom-0
     xs: right-0
     xs:left-0 `;

const mdStyles = `
     lg:flex
     lg:opacity-100
     lg:font-extrabold
     xs:bg-primary xs:text-white gap-1 items-center
     lg:flex-row lg:h-auto lg:bg-transparent
     lg:text-black
     lg:translate-x-0

     `;

export function NavLinks({
  accessToken,
  login,
  numOfCartItems,
  isError,
  isLoading,
  showNav,
  setShowNav,
}) {
  const { logout } = useAuth();
  return (
    <ul
      className={
        `
        ${xsStylse} + ${mdStyles}
   
    transition-all
    duration-300
    
    ` +
        (showNav
          ? " xs:translate-x-0 xs:opacity-100 "
          : " xs:translate-x-[100%] xs:opacity-0  ")
      }
    >
      <CgClose
        onClick={() => {
          setShowNav((show) => !show);
        }}
        color="white"
        cursor={"pointer"}
        fontSize={40}
        className="  lg:hidden "
      />

      {accessToken ? (
        <>
          <NavLink className="nav-item" to={"/home"}>
            Home
          </NavLink>
          <NavLink className="nav-item" to={"/allorders"}>
            Orders
          </NavLink>

          <NavLink className="nav-item" to={"/order/payment"}>
            Payment
          </NavLink>
          <NavLink className="nav-item" to={"/shop"}>
            Shop
          </NavLink>

          <NavLink to={"/cart"} className="nav-item relative ">
            Cart
            <span
              className="
                     bg-green-800
              rounded-lg
              absolute -top-[8px] -right-[4px]  text-xs font-medium
              px-1   text-white  border
     "
            >
              {isLoading ? "..." : isError ? 0 : numOfCartItems}{" "}
            </span>
          </NavLink>

          <NavLink className="nav-item" to={"/whishlist"}>
            Wishlist
          </NavLink>
          <NavLink className="nav-item xs:block lg:hidden" to={"/profile"}>
            Profile
          </NavLink>
          <NavLink
            onClick={logout}
            className="nav-item xs:block lg:hidden"
            to={"/whishlist"}
          >
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className="nav-item" to={"/home"}>
            Home
          </NavLink>
          <NavLink className="nav-item" to={"/login"}>
            Login
          </NavLink>
          <NavLink className="nav-item" to={"/signup"}>
            Sign Up
          </NavLink>
        </>
      )}
    </ul>
  );
}
