import React, { useContext } from 'react'
import Searchbar from './Searchbar';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const { accessToken, logout } = useContext(AuthContext)



  return (
    <nav className='border-b py-3 mb-5'>
      <div className="container  m-auto flex justify-between items-center">
        <div>
          <h2 className='text-2xl font-bold'>
            Logo
          </h2>
        </div>
        <ul className='flex gap-5'>
          {accessToken ? <>
            <Link to={'/'}>Home</Link>
            <Link>Contact</Link>
            <Link>About</Link>
            <Link onClick={() => { logout() }} >Logout</Link>
          </> : <li>Sign Up</li>}



        </ul>

        <Searchbar />


      </div>




    </nav>
  )
}
