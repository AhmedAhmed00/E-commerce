import { jwtDecode } from 'jwt-decode';
import React from 'react'

export default function PersonalInformation() {


    const accessToken = localStorage.getItem("accessToken")
    const user = jwtDecode(accessToken)
    console.log(user.name);

    return (
        <div>


            <h3 className="text-2xl  text-primary">Personal Information</h3>
            <div className="flex header gap-10 py-8 ">
                <div className="flex w-1/2 flex-col">
                    <label htmlFor="">
                        First Name
                    </label>
                    <input className="capitalize border p-3 rounded-lg mt-2 text-primary" type="text" name="" value={user.name.split(' ')[0]} id="" />
                </div>
                <div className="flex w-1/2 flex-col">
                    <label htmlFor="">
                        Last Name
                    </label>
                    <input className="capitalize border p-3 rounded-lg mt-2 text-primary" type="text" name="" value={user.name.split(' ')[1]} id="" />
                </div>
            </div>
        </div>





    )
}
