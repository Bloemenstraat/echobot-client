import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";

const AdminRoute = ({component: Component, ...rest}: any) => {

    const [ isAdmin, setIsAdmin ] = useState(false);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REMOTE_API}/auth/isadmin`, {
            headers: {
            'auth-token': localStorage.getItem('echobot-jwt')
            }
        })
        .then((res) => {
            if (res.status == 200)
                setIsAdmin(true);
        })
        .catch(() => {
            setIsAdmin(false);
        });

    }, []);

    return (
        isAdmin ? <Component {...rest} /> : <NotFound />
    );
}
 

export default AdminRoute;