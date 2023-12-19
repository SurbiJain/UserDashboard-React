import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "./../../Theme";
import { mockDataTeam } from "./../../data/MockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "./../../component/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "EMAIL ADDRESS", flex: 1 },
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "PHONE NUMBER",
      flex: 1,
    },
    {
      field: "access",
      headerName: "ACCESS LEVEL",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius= "4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
            {access === "manager" && <SecurityOutlinedIcon/>}
            {access === "user" && <LockOpenOutlinedIcon/>}
            <Typography color={colors.grey[100]} sx={{ml:"5px"}}/>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Header title="Team" subtitle="Managing the team Members" />
      <Box 
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root" :{
          border:"none",
        },
        "& .MuiDataGrid-cell" :{
          borderBottom:"none",
        },
        "& .name-column--cell" :{
          color:colors.greenAccent[300],
        },
        "& .MuiDataGrid-footerContainer" :{
          backgroundColor:colors.blueAccent[700],
          borderTop: 'none'
          
        },
        "& .MuiDataGrid--virtualScroller" :{
          color:colors.primary[400],
        },
        "& .MuiDataGrid-columnHeaders" :{
          backgroundColor:colors.blueAccent[700],
          borderBottom: "none"
        }

      }}>
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
