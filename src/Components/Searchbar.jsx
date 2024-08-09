import { CiSearch } from "react-icons/ci";
import SearchProducts from "../features/Products/SearchProducts";
import { useState } from "react";

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");

  // const { data: { data } = {} } = useProducts()

  // let arrOfResaults = []

  // if (searchQuery.length > 0) {
  // }

  return (
    <>
      <div
        className="flex items-center rounded-lg 
        xs:hidden lg:block
             px-4 py-1.5 text-sm bg-vanilla
              light:text-[#191f40] 
              border
              dark:border-brown-color
              h-full
               border-black  relative"
      >
        <input
          defaultValue={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-inherit me-6 focus:border-none 
                     w-full focus:outline-none text-sm pe-3  md:block"
          placeholder="What are you looking for"
          id="search"
          type="text"
        />
        <i
          className="text-xl
                  text-white
                  
                  dark:text-black
                  bg-primary dark:bg-brown-color text-dark rounded-e-lg  
                   absolute right-0 top-0 bottom-0 flex items-center px-2 
                   
                   "
        >
          {" "}
          <CiSearch />
        </i>

        {searchQuery.length > 0 && <SearchProducts searchQuery={searchQuery} />}
      </div>
    </>
  );
}
