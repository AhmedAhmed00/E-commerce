import { NavLink, Outlet } from "react-router-dom";
import profile from "../../public/profile.jpg"

export default function Profile() {


    return (

        <div className="container py-6 flex xs:flex-col md:flex-row min-h-[500px] gap-8">

            <div className="xs:w-full md:w-4/12 lg:w-3/12  p-4 rounded-lg border shadow-md ">
                <img className="w-24 rounded-2xl m-auto" src={profile} alt="" />
                <ul className="flex flex-col gap-1 mt-6">


                    <NavLink className={'text-xl text-center py-1 px-3 '} to={'personalinformation'} >My Profile</NavLink>
                    <NavLink className={'text-xl text-center py-1 px-3'} to='updatepassword' >
                        Update Password
                    </NavLink>

                </ul>
            </div>

            <div className="p-4  rounded-lg border shadow-md flex-1">
                <Outlet />

            </div>



        </div>
    )
}
