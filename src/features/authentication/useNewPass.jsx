import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { resetPass } from '../../Services/userApi'
import { Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from './AuthContext'

export default function useNewPass() {
    const { setAccessToken } = useAuth()

    const { mutate: resetData, isError, status } = useMutation({

        mutationFn: (data) => resetPass(data),
        onSuccess: (data) => {
            Navigate('/home')
            setAccessToken(data.token)
            localStorage.setItem("accessToken", data.token)
            toast.success('Your email and password updated Successfully');
        },
        onError: (err) => {
            console.log(err);
            toast.error("Cannot update")
        }

    })
    return { resetData, isError, status }
}
