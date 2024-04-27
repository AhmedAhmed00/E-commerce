import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
// import { getAllOrders } from '../../Services/ordersApi'

import { jwtDecode } from 'jwt-decode'
import { useAuth } from '../../Context/AuthContext'
import { getAllOrders } from '../../Services/OrdersApi'


export default function useOrders() {


    const accessToken = localStorage.getItem("accessToken")

    const { id } = jwtDecode(accessToken)

    const { data: orders, isError, isLoading } = useQuery({
        queryKey: ['orders', id],
        queryFn: () => getAllOrders(id)
    })


    return { orders, isError, isLoading }

}
