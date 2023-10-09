import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext)
    const location =useLocation()
    if(loading){
        return<span className="loading  w-96 mx-auto loading-spinner "></span>
    }
    if(user){
           return children
    }
    return  <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;