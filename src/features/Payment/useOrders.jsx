
// export default function useCashPay() {



//     const { cart: { data: { _id, } = {} } = {}, } = useCart()
//     const accessToken = localStorage.getItem("accessToken")
//     const queryClient = useQueryClient()
//     const navigate = useNavigate()

//     const { mutate: addCashOrder, data: order, isError, isLoading } = useMutation({

//         mutationFn: (body) => createCashOrder(body, _id, accessToken),


//         onSuccess: () => {
//             queryClient.invalidateQueries({
//                 queryKey: ['orders', 'orders']
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
