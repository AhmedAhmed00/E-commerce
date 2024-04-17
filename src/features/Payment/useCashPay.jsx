import React, { useContext } from 'react'
import { createCashOrder } from '../../Services/PaymentApi'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import useCart from '../cart/useCart'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { CreatedOrderContext } from '../../Context/CreatedOrderContext'

// export default function useCashPay() {



//     const { cart: { data: { _id, } = {} } = {}, } = useCart()
//     const accessToken = localStorage.getItem("accessToken")
//     const queryClient = useQueryClient()
//     const navigate = useNavigate()

//     const { mutate: addCashOrder, data: order, isError, isLoading } = useMutation({

//         mutationFn: (body) => createCashOrder(body, _id, accessToken),
//         onSuccess: () => {
//             queryClient.invalidateQueries({
//                 queryKey: ['cart']
//             })
//             toast.success("Your Order Created Successfully")
//             navigate('/ordercreated')

//         },
//         onError: () => {
//             toast.error("Cannot Create Your order")
//         }


//     })
//     return { isError, isLoading, addCashOrder, order }
// }









export default function useCashPay() {



    const { cart: { data: { _id, } = {} } = {}, } = useCart()
    const accessToken = localStorage.getItem("accessToken")
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { createdOrder, setCreatedOrder } = useContext(CreatedOrderContext)

    const { mutate: addCashOrder, data: order, isError, isLoading } = useMutation({

        mutationFn: (body) => createCashOrder(body, _id, accessToken),


        onSuccess: (data) => {
            console.log(data);

            setCreatedOrder({
                ...order,
                totalOrderPrice: data.data.totalOrderPrice,
                isConfrimed: true,
                date: data.data.createdAt,
                id: data.data.id,
            })
            console.log(createdOrder);


            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
            toast.success("Your Order Created Successfully")
            return navigate(`createdorder/${data.data.id}`, { state: { order: data } })

        },
        onError: () => {
            toast.error("Cannot Create Your order")
        }


    })
    return { isError, isLoading, addCashOrder, order }
}









// export default function useCashPay() {



//     const { cart: { data: { _id, } = {} } = {}, } = useCart()
//     const accessToken = localStorage.getItem("accessToken")
//     const queryClient = useQueryClient()
//     const navigate = useNavigate()

//     const { data: order, isError, isLoading, refetch } = useQuery({

//         queryFn: (body) => createCashOrder(body, _id, accessToken),
//         queryKey: ['order'],
//         enabled: false,




//     })
//     return { isError, isLoading, order, refetch: }
// }




