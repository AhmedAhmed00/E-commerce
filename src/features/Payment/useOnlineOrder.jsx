import React from 'react'
import { createCashOrder, createOnlineOrder } from '../../Services/PaymentApi'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import useCart from '../cart/useCart'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


export default function useOnlineOrder() {



    const { cart: { data: { _id, } = {} } = {}, } = useCart()
    const accessToken = localStorage.getItem("accessToken")
    const queryClient = useQueryClient()
    const url = window.location.href

    const navigate = useNavigate()

    const { mutate: addOnlineOrder, data: order, isError, isLoading } = useMutation({

        mutationFn: (body) => createOnlineOrder(body, _id, accessToken, url),


        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
            toast.success("Your Order Created Successfully")
            window.open(data.session.url, "_blank")
        },

        onError: () => {
            toast.error("Cannot Create Your order")
        }


    })
    return { isError, isLoading, addOnlineOrder, order }
}









