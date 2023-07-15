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
            {
                path:'/singup',
                element:<Singup/>
            },
            {
                path:'/book/:id',
                loader: ({params}) => {
                  return fetch(`https://book-catalog-sigma.vercel.app/api/v1/books/${params.id}`)
                },
                element: <Bookdetails />
              
              },
            {
                path:'/edit-book/:id',
                loader: ({params}) => {
                  return fetch(`https://book-catalog-sigma.vercel.app/api/v1/books/${params.id}`)
                },
                element: <EditBook />
              
              },
            {
                path:'/add-book',
                element: <AddBook />
              
              },
        ]
    }
])

export default router;