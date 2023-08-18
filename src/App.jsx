import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./router/root.jsx"
import ErrorPage from "./error-page"
import Dashboard from "./components/Dashboard"
import Product from "./components/Product"
import Cart from "./components/Cart"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} errorElement={<ErrorPage />} >
    <Route index element={<Dashboard />} />
    <Route path="product" element={<Product />} />
    <Route path="cart" element={<Cart />} />
  </Route>
))

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
