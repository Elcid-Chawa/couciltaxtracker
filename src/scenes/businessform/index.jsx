import {
  Box,
  Button,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { DatePicker } from "@mui/x-date-pickers";
// import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/LoginButton";

const initialValues = {
  bid: "",
  ownername: "",
  businesstype: "",
  businessowner: "",
  phone: "",
  tax: "",
  email: "",
  location: "",
  status: "",
  businessrevenue: "",
};

const BusinessForm = () => {
  const isNoneMobile = useMediaQuery("(min-width:600px)");
  const { isAuthenticated } = useAuth0();
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  if (isAuthenticated) {
    return (
      <Box m="20px">
        <Header
          title="ADD NEW BUSINESS"
          subtitle={"Add new registered business to list."}
        />
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="5px"
                gridTemplateColumns="repeat(5, minmax(0, 1fr))"
                sx={{
                  "& > div": {
                    gridColumn: isNoneMobile ? undefined : "span 5",
                  },
                }}
              >
                {/* ROW 1 */}
                <Typography>Business ID:</Typography>
                <TextField
                  variant="filled"
                  name="bid"
                  value={values.bid}
                  type="text"
                  onChange={handleChange}
                  label="Business ID: TBD"
                  sx={{ gridColumn: "span 1" }}
                  disabled
                />
                <Box sx={{ gridColumn: "span 1" }}></Box>
                <Typography>Business Name:</Typography>
                <TextField
                  variant="filled"
                  name="ownername"
                  value={values.ownername}
                  type="text"
                  onChange={handleChange}
                  label="Business Name: "
                  sx={{ gridColumn: "span 1" }}
                />

                {/* ROW 2 */}
                <Typography>Business Owner</Typography>
                <TextField
                  variant="filled"
                  name="businessowner"
                  value={values.businessowner}
                  type="text"
                  onChange={handleChange}
                  label="Business Owner: "
                  sx={{ gridColumn: "span 1" }}
                />
                <Box sx={{ gridColumn: "span 1" }}></Box>
                <Typography>Tax Registration ID:</Typography>
                <TextField
                  variant="filled"
                  name="tax"
                  value={values.tax}
                  type="text"
                  onChange={handleChange}
                  label="Tax: "
                  sx={{ gridColumn: "span 1" }}
                />

                {/* ROW 3 */}
                <Typography>Contact Number:</Typography>
                <TextField
                  variant="filled"
                  name="phone"
                  value={values.phone}
                  type="text"
                  onChange={handleChange}
                  label="Contact Number: "
                />
                <Box sx={{ gridColumn: "span 1" }}></Box>
                <Typography>Business Type:</Typography>
                <TextField
                  variant="filled"
                  name="businesstype"
                  value={values.businesstype}
                  type="text"
                  onChange={handleChange}
                  label="Business Type: "
                  sx={{ gridColumn: "span 1" }}
                />

                {/* ROW 4 */}
                <Typography>Email:</Typography>
                <TextField
                  variant="filled"
                  name="email"
                  value={values.email}
                  type="email"
                  onChange={handleChange}
                  label="Email: "
                />
                <Box sx={{ gridColumn: "span 1" }}></Box>
                <Typography>Revenue:</Typography>
                <TextField
                  variant="filled"
                  name="businessrevenue"
                  value={values.businessrevenue}
                  type="text"
                  onChange={handleChange}
                  label="Revnue: "
                  sx={{ gridColumn: "span 1" }}
                />

                {/* ROW 5 */}
                <Typography>Location:</Typography>
                <TextField
                  variant="filled"
                  name="location"
                  value={values.location}
                  type="text"
                  onChange={handleChange}
                  label="Location: "
                />
                <Box sx={{ gridColumn: "span 1" }}></Box>
                <Typography>Status:</Typography>
                <TextField
                  variant="filled"
                  name="status"
                  value={values.status}
                  type="text"
                  onChange={handleChange}
                  label="Status: "
                  sx={{ gridColumn: "span 1" }}
                />
                <Typography>Registartion Date:</Typography>
                <DatePicker />
              </Box>

              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Add New Business
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    );
  }
  return (
    <Box display="flex" alignItems="center" marginLeft="20px">
      {" "}
      Requires Login{" "}
      <IconButton>
        <LoginButton />
      </IconButton>
    </Box>
  );
};

export default BusinessForm;
