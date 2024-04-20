import { jwtDecode } from "jwt-decode"
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Profile() {


    return (

        <div className="container flex h-[500px] mb-10 gap-8">

            <div className="w-3/12 p-4 rounded-lg border shadow-md ">
                <img className="w-24 rounded-2xl m-auto" src="../../public/assets/profile.jpg" alt="" />
                <ul className="flex flex-col gap-1 mt-6">


                    <NavLink className={'text-xl text-center py-1 px-3 '} to={'personalinformation'} >My Profile</NavLink>
                    <NavLink className={'text-xl text-center py-1 px-3'} to='updatepassword' >
                        Update Password
                    </NavLink>



                </ul>
            </div>

            <div className="p-4 rounded-lg border shadow-md flex-1">
                <Outlet />

            </div>



        </div>
    )
}
