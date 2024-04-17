
import Topheader from './Topheader'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
import Header from './Header';
import useCart from '../features/cart/useCart';



export default function Layout() {







    return (
        <>
            <Topheader />
            <Navbar />



            <div className='container m-auto'>
                <Outlet />
            </div>


        </>

    )
}
