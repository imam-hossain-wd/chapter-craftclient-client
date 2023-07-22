import IsLoading from "@/components/IsLoading";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
    children:ReactNode
}


export default function PrivateRoutes ({children}:IProps){
    const { user, isLoading } = useAppSelector((state) => state.user);
    const location = useLocation();

    if (isLoading) {
      return <IsLoading />
    }

  
    if (!user.email && !isLoading) {
      return <Navigate to="/singin" state={{from: location}} replace></Navigate>;
    }

    return children
}

