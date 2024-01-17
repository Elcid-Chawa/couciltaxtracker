import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";

const ProtectedRoute = ({ component, path }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Routes>
      <Route element={isAuthenticated && component} path={path} />
    </Routes>
  );
};

export default ProtectedRoute;
