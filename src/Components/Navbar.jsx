import React, { useContext } from 'react'
import Searchbar from './Searchbar';
import { AuthContext } from '../Context/AuthContext';


export default function Navbar() {
  const { accessToken, logout } = useContext(AuthContext)
  return (
    <nav className='border-b mb-6'>
      <div className="container  m-auto flex justify-between items-center">
        <div>
          <h2 className='text-2xl font-bold'>
            Logo
          </h2>
        </div>
        <ul className='flex gap-5'>
          {accessToken ? <>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li onClick={() => { logout() }} >Logout</li>
          </> : <li>Sign Up</li>}



        </ul>

        <Searchbar />


      </div>




    </nav>
  )
}
