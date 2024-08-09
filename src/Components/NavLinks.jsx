import { CgClose } from "react-icons/cg";

import { NavLink } from "react-router-dom";

const xsStylse = `xs:flex-col xs:h-screen 
     xs:p-10
     xs:gap-5
     md:sticky md:p-0 md:gap-1
     xs:fixed
     xs:flex
     z-10
     xs:top-0
     xs:bottom-0
     xs: right-0
     xs:left-0 `;

const mdStyles = `
      md:flex
     md:opacity-100
     md:font-extrabold
     xs:bg-primary xs:text-white gap-1 items-center
     md:flex-row md:h-auto md:bg-transparent
     md:text-black
     md:translate-x-0

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
        className="  md:hidden "
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
