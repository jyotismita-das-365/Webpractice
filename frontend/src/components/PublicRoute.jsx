import { Navigate } from "react-router-dom";
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

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingState text="Loading account" />;
  }

  if (user) {
    return <Navigate to={getRoleHome(user.role)} replace />;
  }

  return children;
};

export default PublicRoute;
