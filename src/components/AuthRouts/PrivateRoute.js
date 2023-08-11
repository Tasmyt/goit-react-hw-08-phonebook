import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from "redax/auth/authSelectors";

export const PrivateRoute = () => {
    const token = useSelector(selectToken);
    return token ? <Outlet/> : <Navigate to='/' replace/>;
};