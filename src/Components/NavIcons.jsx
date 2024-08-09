import React from "react";
import { BsMoonStars } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useDarkMode } from "../Context/ModeContext";

export default function NavIcons({ logout }) {
  const { isDark, toggleDarkMode } = useDarkMode();
  return (
    <div className="lg:flex gap-4 items-center ">
      <Searchbar />

      <button>
        {isDark ? (
          <MdOutlineWbSunny
            fontSize={"24px"}
            onClick={toggleDarkMode}
            className="text-2xl text-title"
          />
        ) : (
          <BsMoonStars
            fontSize={"24px"}
            onClick={toggleDarkMode}
            className="text-2xl text-primary"
          />
        )}
      </button>
      <Link to={"/profile"}>
        <CgProfile fontSize={"24px"} />
      </Link>

      <button
        to=""
        onClick={() => {
          logout();
        }}
      >
        <RiLogoutBoxLine className="text-red-500" fontSize={"24px"} />
      </button>
    </div>
  );
}
