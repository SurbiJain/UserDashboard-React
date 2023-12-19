import {Box, Typography, useTheme } from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import { tokens } from "./../../Theme";
import { mockDataInvoices } from "./../../data/MockData";
import Header from "./../../component/Header";


const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "EMAIL ADDRESS", flex: 1 },
    
    {
      field: "phone",
      headerName: "PHONE NUMBER",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      type: "number",
      flex: 1,
      renderCell: (params)=>(
        <Typography color={colors.greenAccent[500] }>
          ${params.row.cost}
        </Typography>
      )
    },
    {
      field: "date",
      headerName: "Date",
      type: "number",
      flex: 1,
    },
   
    
        
  ];
  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="List of invoice balance" />
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
        },
        "& .MuiCheckbox-root" : {
          color: `${colors.greenAccent[200]} !important`,
        },

      }}>
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};

export default Invoices;
