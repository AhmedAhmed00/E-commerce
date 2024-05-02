import '../src/index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './Context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense, lazy } from 'react';
import ScrollToTop from './Components/ScrollToTop';
import ProtectedRoute from './Components/ProtectedRoute';
import ProductDetails from './features/Products/ProductDetails';
import Order from './features/Payment/Order';
import CreatedOrderProvider from './Context/CreatedOrderContext';
import SelectedOrder from './features/Orders/SelectedOrder';
import NotSelectedOrder from './features/Orders/NotSelectedOrder';
import PersonalInformation from './features/user.jsx/PersonalInformation';
import UpdatePassword from './features/user.jsx/UpdatePassword';
import NewPassword from './features/authentication/NewPassword';
import OrderStatus from './features/Payment/OrderStatus';
import FullPageSpinner from './Components/FullPageSpinner';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



const Layout = lazy(() => import('./Components/Layout'))
const Signup = lazy(() => import('./Pages/Signup'))
const Homepage = lazy(() => import('./Pages/Homepage'))
const Login = lazy(() => import('./Pages/Login'))
const Shop = lazy(() => import('./Pages/Shop'))
const Wishlist = lazy(() => import('./Pages/Wishlist'))
const ForgotPass = lazy(() => import('./features/authentication/ForgotPass'))
const Verify = lazy(() => import('./features/authentication/Verify'))
const Orders = lazy(() => import('./features/Orders/Orders'))
const Profile = lazy(() => import('./Pages/Profile'))
const Payment = lazy(() => import('./features/Payment/Payment'))
const ShoppingCart = lazy(() => import('./features/cart/ShoppingCart'))


function App() {


  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 15 * 1000,
        refetchOnMount: false,
        retry: 0
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
              <Suspense fallback={<FullPageSpinner />}>
                <ScrollToTop />
                <Routes>
                  <Route element=<Layout />  >
                    <Route path='home' element={<Homepage />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='shop' element={<Shop />} />
                    <Route index element={<Navigate to={'home'} />} />
                    <Route path='cart' element=<ProtectedRoute><ShoppingCart /></ProtectedRoute> />



                    <Route path='login' element={<Login />} />

                    <Route path='forgotpassword' element={<ForgotPass />} />

                    <Route path='forgotpassword/verify' element={<Verify />} />

                    <Route path='forgotpassword/verify/newpassword' element={<NewPassword />} />





                    <Route path='whishlist' element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
                    <Route path='profile' element={<ProtectedRoute><Profile /> </ProtectedRoute>} >
                      <Route index element={<Navigate to={'personalinformation'} />} />
                      <Route path='personalinformation' element={<ProtectedRoute><PersonalInformation /></ProtectedRoute>} />
                      <Route path='updatepassword' element={<ProtectedRoute> <UpdatePassword /> </ProtectedRoute>} />
                    </Route>

                    <Route path='allorders' element={<ProtectedRoute> <Orders /> </ProtectedRoute>} >
                      <Route index element={<NotSelectedOrder />} />
                      <Route path=':orderId' element={<SelectedOrder />} />
                    </Route>

                    <Route path='order' element={<ProtectedRoute><Order /> </ProtectedRoute>} >
                      <Route path='payment' element={<Payment />} />
                      <Route path='payment/createdOrder/:orderId' element={<OrderStatus />} />
                    </Route>

                    <Route path='products/productInfo/:productId' element={<ProductDetails />} />
                  </Route>
                  <Route />
                </Routes>
                <Toaster position='bottom-right' />
              </Suspense>
            </BrowserRouter>
          </CreatedOrderProvider>
        </AuthProvider>
      </QueryClientProvider >

    </>
  )
}

export default App
