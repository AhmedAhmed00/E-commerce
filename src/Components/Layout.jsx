
import Topheader from './Topheader'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
import Footer from './Footer';


export default function Layout() {







    return (
        <>



            <Topheader />
            <Navbar />

            <Outlet />

            <Footer />

        </>

    )
}
