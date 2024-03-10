import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const isAuthenticated = localStorage.getItem('userData');
  
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;
