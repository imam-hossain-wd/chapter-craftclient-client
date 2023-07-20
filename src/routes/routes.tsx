import MainLayout from "@/layouts/MainLayout";
import Bookdetails from "@/pages/Bookdetails/Bookdetails";
import Singin from "@/pages/Singin/Singin";
import AddBook from "@/pages/addBook/AddBook";
import AllBooks from "@/pages/allBooks/AllBooks";
import Checkout from "@/pages/checkout/Checkout";
import EditBook from "@/pages/editBook/EditBook";
import Home from "@/pages/home/Home";
import Singup from '@/pages/singup/Singup'
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Wishlist from "@/pages/wishlist/Wishlist";
import Bookstatus from "@/pages/wishlist/Bookstatus";



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
                path:'/wish-list',
                element:<Wishlist />
            },
            {
                path:'/wish-list/status',
                element:<Bookstatus />
            },
            {
                path:'/singin',
                element:<Singin/>
            },
            {
                path:'/singup',
                element:<Singup/>
            },
            {
                path:'/book/:id',
                element: <Bookdetails />
              
              },
            {
                path:'/edit-book/:id',
                element: <EditBook />
              
              },
              {
                path:'/checkout/:id',
                element:<Checkout />
            },
            {
                path:'/add-book',
                element: <PrivateRoutes> <AddBook /></PrivateRoutes>
              
              },
        ]
    }
])

export default router;