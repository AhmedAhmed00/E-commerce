import { useMutation } from '@tanstack/react-query'
import { forgotPassword } from '../../Services/userApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useForgotPass() {
    const navigate = useNavigate()

    const { mutate, data, isError, status } = useMutation({
        mutationFn: (body) => forgotPassword(body),
        onSuccess: (data) => {
            navigate('verify')
            toast.success("the code sent to your Email")
        },
        onError: () => {
            toast.success("Enter Valid Email")
        }
    })

    return { data, isError, status, mutate }

}
