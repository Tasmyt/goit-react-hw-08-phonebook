import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from "redax/auth/authSelectors";

export const PablicRoute = () => {
    const token = useSelector(selectToken);
    return token ? <Navigate to='/' replace/> : <Outlet/>;
};