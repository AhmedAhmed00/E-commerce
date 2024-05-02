import React, { useState } from 'react'
import useUser from './useUser';
import useUpdateProfile from './useUpdateProfile';
import { useForm } from 'react-hook-form';
import { MdModeEditOutline } from 'react-icons/md';
import { IoExitOutline } from 'react-icons/io5';
import LoaderSpinner from './../../Components/LoaderSpinner';
import { emailValid, phoneValid } from '../../utilities/inputsValidation';
import { nameValid } from '../../utilities/inputsValidation';
import Input from '../../Components/Input';

export default function PersonalInformation() {





    const { isLoading, isError, userData: { data: { email, name, phone } = {} } = {} } = useUser()

    const { mutateProfile, status } = useUpdateProfile()

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const [editMode, setEditMode] = useState(false)

    function onSubmit(data) {
        mutateProfile(data, {
            onSuccess: () => {
                handleeditMode()
            }
        })
    }

    function handleeditMode() {
        reset()
        setEditMode(edit => !edit)
    }



    return (
        <>


            <div className='flex justify-between'>

                <h3 className="text-head">Personal Information</h3>
                <button onClick={handleeditMode} type='button' className='flex items-center gap-1 px-3 rounded-lg border' >
                    {editMode ? <IoExitOutline /> : <MdModeEditOutline />}
                    <span>{editMode ? "Close" : "Edit"}</span>   </button>

            </div>

            <form onSubmit={handleSubmit(onSubmit)}>



                {status === 'pending' || isLoading ? <LoaderSpinner /> : (isError || status === 'error') ? <div>errrrrrrrrrrrrror</div> :

                    <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3 py-5">

                        <div className="flex flex-col">
                            <Input key={1}
                                label={'Name'}
                                type={'text'}
                                id={'name'}
                                errors={errors}
                                name={'name'}
                                readOnly={!editMode}
                                placeholder={editMode ? "Insert New Name" : ''}
                                register={register} regex={nameValid}
                                defaultValue={editMode ? "" : name} />
                        </div>





                        <div className="flex flex-col">
                            <Input
                                key={2}
                                label={'Email'}
                                type={'email'}
                                id={'email'}
                                errors={errors}
                                name={'email'}
                                readOnly={!editMode}
                                placeholder={editMode ? "Insert New Email" : ''}
                                register={register} regex={emailValid}
                                defaultValue={editMode ? "" : email} />
                        </div>



                        <div className='flex flex-col'>
                            <Input
                                key={3}
                                label={'Phone Number'}
                                type={'tel'}
                                id={'phone'}
                                errors={errors}
                                name={'phone'}
                                readOnly={!editMode}
                                register={register} regex={phoneValid}
                                placeholder={editMode ? "Insert New Phone Number" : ''}
                                defaultValue={editMode ? "" : phone}

                            />
                        </div>
                    </div>
                }

                {editMode ? <input type="submit" className='submit-profile' value={'Update'} />
                    : ""}





            </form>







        </>





    )
}
