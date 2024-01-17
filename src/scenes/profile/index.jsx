import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = ({props}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {isAuthenticated} = useAuth0();
 console.log(isAuthenticated) ;
  if (isAuthenticated) {
    return (
      <Box
        m="20px"
        display="grid"
        gridTemplateColumns="repeat (12, 1fr)"
        gridTemplateRows="[head] 50% [image] 10% [names] 100%"
      >
        <Box
          sx={{
            backgroundColor: colors.primary[400],
            gridColumn: "span 12",
          }}
        >
          head section
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            gridColumn: "span 12",
            gridRowStart: "image",
            gridRowEnd: "names",
          }}
        >
          <img alt="profilephoto" src={`../../assets/user.png`} />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ gridColumn: "span 12", flexDirection: "column" }}
        >
          <Typography>User Name</Typography>
          <Typography>User Role</Typography>
          <Typography>User Address</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ gridColumn: "span 12" }}
        >
          <Button type="submit" variant="contained" color="secondary">
            Connect
          </Button>{" "}
          <Button color="secondary">Send Message</Button>
        </Box>
      </Box>
    );
  }
  return (<Box>Requires Login</Box>)
};

export default Profile;
