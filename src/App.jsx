import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import '../src/index.css'
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './features/authentication/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Layout from './Components/Layout'
import Signup from './Pages/Signup'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProductDetails from './features/Products/ProductDetails';
import ShoppingCart from './features/cart/ShoppingCart'
import ProtectedRoute from './Components/ProtectedRoute';
import Payment from './features/Payment/Payment';
import CreatedOrder from './features/Payment/CreatedOrder';
import Order from './features/Payment/Order';
import CreatedOrderProvider from './Context/CreatedOrderContext';
import Orders from './features/Orders/Orders';
import SelectedOrder from './features/Orders/SelectedOrder';
import NotSelectedOrder from './features/Orders/NotSelectedOrder';
import Profile from './Pages/Profile';
import PersonalInformation from './features/user.jsx/PersonalInformation';
import UpdatePassword from './features/user.jsx/UpdatePassword';
import Wishlist from './Pages/Wishlist';
import ForgotPass from './features/authentication/ForgotPass';
import NewPassword from './features/authentication/NewPassword';
import Verify from './features/authentication/Verify';



function App() {


  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 90 * 1000,
        refetchOnMount: false
      }
    }

  })





  return (
    <>
      <QueryClientProvider client={queryClient} >

        <ReactQueryDevtools />
        <AuthProvider>
          <CreatedOrderProvider>
            <BrowserRouter>
              <Routes>
                <Route element=<Layout />  >
                  <Route index element={<Navigate to={'home'} />} />
                  <Route path='cart' element=<ProtectedRoute><ShoppingCart /></ProtectedRoute> />
                  <Route path='home' element={<Homepage />} />
                  <Route path='signup' element={<Signup />} />



                  <Route path='login' element={<Login />} />
                  <Route path='forgotpassword' element={<ForgotPass />} />
                  <Route path='forgotpassword/verify' element={<Verify />} />
                  <Route path='forgotpassword/verify/newpassword' element={<NewPassword />} />







                  <Route path='whishlist' element={<Wishlist />} />
                  <Route path='profile' element={<Profile />} >
                    <Route index element={<Navigate to={'personalinformation'} />} />
                    <Route path='personalinformation' element={<PersonalInformation />} />
                    <Route path='updatepassword' element={<UpdatePassword />} />
                  </Route>


                  <Route path='orders' element={<Orders />} >
                    <Route index element={<NotSelectedOrder />} />
                    <Route path=':orderId' element={<SelectedOrder />} />
                  </Route>

                  <Route path='order' element={<Order />} >
                    <Route path='payment' element={<Payment />} />
                    <Route path='payment/createdOrder/:orderId' element={<CreatedOrder />} />
                  </Route>

                  <Route path='products/productInfo/:productId' element={<ProductDetails />} />
                </Route>
                <Route />
              </Routes>
              <Toaster position='bottom-right' />
            </BrowserRouter>
          </CreatedOrderProvider>
        </AuthProvider>
      </QueryClientProvider >

    </>
  )
}

export default App
