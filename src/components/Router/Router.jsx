import App from '../../App'
import Home from '../Home/HomePage'
import Cart from '../Cart/CartPage'
import Contact from '../Contact/ContactPage'
import Products from '../Product/ProductPage'
import ErrorPage from '../Error/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
