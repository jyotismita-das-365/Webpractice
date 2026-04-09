import { Navigate, useLocation } from "react-router-dom";
import LoadingState from "./LoadingState";
import { useAuth } from "../context/AuthContext";

const getRoleHome = (role) => {
  if (role === "teacher") {
    return "/teacher-host";
  }

  if (role === "student") {
    return "/student-store";
  }

  return "/";
};

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, loading, isAuthenticated } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingState text="Checking access" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (allowedRoles?.length && !allowedRoles.includes(user?.role)) {
    return <Navigate to={getRoleHome(user?.role)} replace />;
  }

  return children;
};

export default ProtectedRoute;
