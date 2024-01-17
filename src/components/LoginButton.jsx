import { useAuth0 } from "@auth0/auth0-react";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  return <LoginIcon onClick={() => loginWithRedirect()} />;
};

export default LoginButton;
