import React, { children } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    alert("Please login first");
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default ProtectedRoute;
