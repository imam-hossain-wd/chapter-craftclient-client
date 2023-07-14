import MainLayout from "@/layouts/MainLayout";
import Singin from "@/pages/Singin/Singin";
import AllBooks from "@/pages/allBooks/AllBooks";
import Checkout from "@/pages/checkout/Checkout";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/home',
                element:<Home />
            },
            {
                path:'/all-books',
                element:<AllBooks />
            },
            {
                path:'/checkout',
                element:<Checkout />
            },
            {
                path:'/singin',
                element:<Singin/>
            },
        ]
    }
])

export default router;