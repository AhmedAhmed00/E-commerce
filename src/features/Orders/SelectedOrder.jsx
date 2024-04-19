import { useParams } from 'react-router-dom'
import useOrders from './useOrders';
import SelectedOrderdItem from './SelectedOrderdItem';

export default function SelectedOrder() {



    const { orderId } = useParams()
    const id = Number(orderId)
    const { orders } = useOrders()
    const order = orders.find(order => order.id === id)



    return (


        <div className='border py-3 px-5 rounded-lg h-[600px] overflow-y-scroll bg-primary-2 shadow-md'>
            <div className='flex justify-between border-b border-black'>
                <h3 className='text-2xl font-oswald mb-3   '>Order #{order.id}</h3>
                <h3 className='text-2xl font-oswald'>Itam Price</h3>
            </div>

            {order.cartItems.map((item, i) => <SelectedOrderdItem key={i} item={item} />)}

        </div>






    )
}
