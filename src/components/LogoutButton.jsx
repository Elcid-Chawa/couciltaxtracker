import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <LogoutIcon
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    />
  );
};

export default LogoutButton;
