import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;

  // If logged in, redirect to main
  if (user) {
    return <Navigate to="/main" replace />;
  }

  return children;
};

export default PublicRoute;
