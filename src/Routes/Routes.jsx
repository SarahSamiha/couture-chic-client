import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Root/Pages/Home/Home";
import ErrorPage from "../Root/Pages/ErrorPage/ErrorPage";
import AddProduct from "../Root/Pages/AddProduct/AddProduct";
import AddBrand from "../Root/Pages/AddBrand/AddBrand";
import BrandProducts from "../Root/Pages/BrandProducts/BrandProducts";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands'),
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/brands/:id",
                element: <BrandProducts></BrandProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`),
            },
            {
                path: '/addBrand',
                element: <AddBrand></AddBrand>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            
        ]
    },
]);

export default router;