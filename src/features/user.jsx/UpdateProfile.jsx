// import { useForm } from 'react-hook-form';
// import useUpdateProfile from './useUpdateProfile';

// export default function UpdateProfile() {



//     const { mutateProfile, data, isError, status } = useUpdateProfile()
//     const { register, handleSubmit, formState: { errors }, reset } = useForm()


//     function onSubmit(data) {

//         mutateProfile(data)

//     }

//     return (

//         <form onSubmit={handleSubmit(onSubmit)}>
//             <h3 className="text-2xl  text-primary">Personal Information</h3>

//             <div className="grid grid-cols-2 gap-5 py-8 ">

//                 <div className="flex flex-col">
//                     <label htmlFor="">First Name</label>

//                     <input name='name' {...register("name", {
//                         required: "This input is required",
//                         min: 3,
//                         max: 12,
//                         pattern: {
//                             value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
//                             message: "Must be three chars at least and must be valid name"
//                         },

//                     })} type="text" placeholder='Name' className='capitalize border p-3 rounded-lg mt-2  text-primary' />
//                     {errors.name ? <small className='bg-red-200 px-3 py-1 mt-3 inline-block w-full rounded' >{errors.name.message}</small> : ""
//                     }
//                 </div>


//                 <div className="flex  flex-col">



//                     <label htmlFor="">
//                         Last Name
//                     </label>
//                     <input name='email' {...register("email", {
//                         required: "Required input", pattern: {
//                             value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                             message: "Invalid Email"

//                         }
//                     })} type="text" placeholder='Email' className='capitalize border p-3 rounded-lg mt-2  text-primary' />
//                     {errors.email ? <small className='bg-red-200 px-3 py-1 mt-3  inline-block w-full rounded' >{errors.email.message}</small> : ""
//                     }




//                 </div>


//                 <div className="flex  flex-col">



//                     <label htmlFor="">
//                         Email
//                     </label>


//                     <input name='phone' {...register("phone", {
//                         required: "Required input", pattern: {
//                             value: /^(01|02|03|010|011|012|015)[0-9]{8}$/
//                             ,
//                             message: "Must be egyptian phone number"

//                         }
//                     })} type="text" placeholder='Phone Number' className='capitalize border p-3 rounded-lg mt-2  text-primary' />
//                     {errors.phone ? <small className='bg-red-200 px-3 py-1 mt-3  inline-block w-full rounded' >{errors.phone.message}</small> : ""
//                     }






//                 </div>
//             </div>

//             <input type="submit" className=' bg-primary-2 text-center   text-black px-4 py-1  text-lg rounded-lg ' value={'Update'} />




//         </form>

//     )
// }
