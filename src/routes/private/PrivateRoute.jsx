import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  console.log(location);

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
