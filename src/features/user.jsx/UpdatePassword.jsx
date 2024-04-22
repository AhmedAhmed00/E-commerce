import { useForm } from "react-hook-form"
import useUpdatePass from "../authentication/useUpdatePass";
import Input from '../../Components/Input';
import { passValid } from '../../utilities/inputsValidation'

export default function UpdatePassword() {





    const { formState: { errors }, getValues, handleSubmit, register } = useForm()
    const { mutatePass, isError, status, data: updatedData, } = useUpdatePass()

    function onSubmit(data) {


        mutatePass(data)

    }






    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <h3 className='text-2xl text-primary mb-3'>Update Password</h3>

            <div className="flex flex-col mb-3 w-1/2">
                <Input
                    key={1}
                    id={'currentPassword'}
                    name={'currentPassword'}
                    readOnly={false} type={'password'}
                    register={register} regex={passValid}
                    errors={errors} label={"Current Password"} />
            </div>


            <div className="flex flex-col mb-3 w-1/2">
                <Input
                    key={2}
                    id={'password'}
                    name={'password'}
                    readOnly={false}
                    type={'password'}
                    register={register}
                    regex={passValid}
                    errors={errors} label={"New Password"} />
            </div>


            <div className="flex flex-col mb-3 w-1/2">
                <Input
                    key={3}
                    id={'rePassword'}
                    name={'rePassword'}
                    readOnly={false}
                    type={'password'}
                    errors={errors} label={"confirm New Password"}
                    register={register} regex={{
                        required: "Required Input",
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                            message: "start with capital letter, at least one number and symbol"

                        },
                        validate: (value) =>
                            value === getValues().password || "passwords doesn't match"

                    }}
                />
            </div>


            <button className="submit-profile">Sumbit</button>

        </form>

    )
}
