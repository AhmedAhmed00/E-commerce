import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import '../src/index.css'
import { Toaster } from 'react-hot-toast';

import Layout from './Components/Layout'
import Signup from './Pages/Signup'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login';
import { AuthProvider } from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProductDetails from './features/Products/ProductDetails';
import Cart from './features/cart/Cart';




function App() {


  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 90 * 1000
      }
    }

  })



  return (
    <>
      <QueryClientProvider client={queryClient} >

        <ReactQueryDevtools />
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route element=<Layout />  >
                <Route index element={<Navigate to={'home'} />} />
                <Route path='cart' element=<Cart /> />
                <Route path='home' element={<Homepage />} />
                <Route path='signup' element={<Signup />} />
                <Route path='login' element={<Login />} />
                <Route path='products/productInfo/:productId' element={<ProductDetails />} />
              </Route>
              <Route />
            </Routes>
            <Toaster position='bottom-right' />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider >

    </>
  )
}

export default App
