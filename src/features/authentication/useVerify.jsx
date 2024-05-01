import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { verifyResetCode } from '../../Services/userApi'
import toast from 'react-hot-toast'

export default function useVerify() {
    const navigate = useNavigate("")

    const { data: verifyData, isError, status, mutate: mutateVerify } = useMutation({
        mutationFn: (verifyCode) => verifyResetCode(verifyCode),
        onSuccess: (data) => {
            navigate('newpassword')
            toast.success("Success")
        },
        onError: (e) => {
            toast.error("Enter Valid Code")

        }

    })

    return { verifyData, isError, status, mutateVerify }



}
