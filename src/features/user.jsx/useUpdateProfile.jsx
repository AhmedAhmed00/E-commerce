import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { updateUserData } from '../../Services/userApi'

export default function useUpdateData() {

    const accessToken = localStorage.getItem("accessToken")
    const queryClient = useQueryClient()

    const { mutate: mutateProfile, data, isError, status } = useMutation({
        mutationFn: (body) => updateUserData(body, accessToken),

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
            toast.success("your Personal Inofrmation Updated Successfully")
        },
        onError: () => {
            toast.error("Please insert differnt Information")
        },



    })
    return { mutateProfile, data, isError, status }



}



