import { Navigate } from "react-router-dom";

const LoggedRoute = ({component: Component, ...rest}: any) => {
    const token = localStorage.getItem('echobot-jwt');

    return (
        token ? <Navigate to="/dashboard" /> : <Component {...rest} />
    );
}
 

export default LoggedRoute;