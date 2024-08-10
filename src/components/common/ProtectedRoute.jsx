import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { uLoggedIn } = useSelector((state) => state.userAuth);
  return uLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
