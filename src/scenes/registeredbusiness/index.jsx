import { Box, useTheme, Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { businessData } from "../../data/mockData";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const RegisteredBusiness = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "ownername", headerName: "Business Owner", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Contact", flex: 1 },
    { field: "businessname", headerName: "Business Name", flex: 1 },
    { field: "businesstype", headerName: "Business Type", flex: 1 },
    { field: "businessrevenue", headerName: "Revenue", align: "left" },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "tax", headerName: "Tax", headerAlign: "left", align: "left" },
    { field: "taxpayment", headerName: "Staus", flex: 1 },
  ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="REGISTERED BUSINESSES"
          subtitle="Managing the Businesses"
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              "& .MuiButtonBase-root": {
                pointerEvents: "none",
              },
            }}
            component={Link}
            to ="/register"
          >
            <AddBoxIcon sx={{ mr: "10px" }} />
            Add Business
          </Button>
        </Box>
      </Box>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBttom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={businessData} columns={columns} />
      </Box>
    </Box>
  );
};

export default RegisteredBusiness;
