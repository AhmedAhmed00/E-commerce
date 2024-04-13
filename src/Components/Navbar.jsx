import Searchbar from './Searchbar';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const { accessToken, logout } = useAuth()


  return (
    <nav className='border-b shadow-sm py-3 text-primary bg-[#e76f51] text-white'>
      <div className="container flex justify-between items-center">
        <div>
          <h2 className='text-2xl font-bold'>
            Logo
          </h2>
        </div>
        <ul className='flex gap-5 text-primary'>
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
