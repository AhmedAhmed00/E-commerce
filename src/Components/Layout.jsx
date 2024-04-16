
import Topheader from './Topheader'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
import Header from './Header';



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
