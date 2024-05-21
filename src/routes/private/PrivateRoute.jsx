import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Loader from "../../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
