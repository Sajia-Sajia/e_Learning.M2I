import React, { useState } from "react";
import Sidebar from "./Sidebar2";
import Topbar from "../etudiant/topBar";
import {
  Tabs,
  Tab,
  Button,
  Typography,
  Grid,
  Box,
  Stack,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  TablePagination,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import CustomDownloadIcon from "@mui/icons-material/GetApp";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ComputerIcon from "@mui/icons-material/Computer";

import "./Dashboard.css";

function Dashboard() {
  const [coursSearch, setCoursSearch] = useState("");
  const [coursPage, setCoursPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [activeTab, setActiveTab] = useState(0);

  // Dummy data pour chaque onglet
  const data = {
    cours: ["Cours A", "Cours B", "Cours C", "Cours D", "Cours E", "Cours F","Cours C", "Cours D", "Cours E", "Cours F"],
    td: ["TD 1", "TD 2", "TD 3", "TD 4"],
    tp: ["TP 1", "TP 2", "TP 3"],
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setCoursSearch(""); // Réinitialise la recherche
    setCoursPage(0); // Réinitialise la pagination
  };

  const filteredData = data[["cours", "td", "tp"][activeTab]].filter((c) =>
    c.toLowerCase().includes(coursSearch.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    coursPage * rowsPerPage,
    (coursPage + 1) * rowsPerPage
  );

  const handleCoursPageChange = (event, newPage) => {
    setCoursPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCoursPage(0);
  };

  const handleDownloadClick = () => {
    console.log("Download clicked");
  };

  return (
    <div className="container-fluid p-0">
      {/* Topbar */}
      <Topbar />

      <div className="row no-gutters">
        {/* Sidebar fixée */}
        <div
          className="col-md-2 col-12 position-fixed"
          style={{ height: "100vh", top: 0, left: 0, zIndex: 1000 }}
        >
          <Sidebar />
        </div>

        {/* Contenu principal */}
        <div className="col-md-10 offset-md-2 col-12">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <Box
              className="table-card"
              sx={{
                width: "900px",
                minHeight: "500px",
                borderRadius: "10px",
                padding: "30px",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
                backgroundColor: "#ffffff",
                border: "1px solid #ddd",
              }}
            >
              {/* Barre de navigation */}
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                sx={{
                  marginBottom: "20px",
                  "& .MuiTabs-flexContainer": { gap: "20px" },
                }}
              >
                <Tab
                  label="Cours"
                  icon={<SchoolIcon />}
                  iconPosition="start"
                  sx={{ minWidth: "120px" }}
                />
                <Tab
                  label="TD"
                  icon={<AssignmentIcon />}
                  iconPosition="start"
                  sx={{ minWidth: "120px" }}
                />
                <Tab
                  label="TP"
                  icon={<ComputerIcon />}
                  iconPosition="start"
                  sx={{ minWidth: "120px" }}
                />
              </Tabs>

              {/* Contenu */}
              <TextField
                placeholder="Chercher..."
                variant="standard"
                value={coursSearch}
                onChange={(e) => setCoursSearch(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "100%",
                  borderBottom: "2px solid gray",
                  "& input": { padding: "5px 10px" },
                  "&:hover": { borderBottom: "2px solid white" },
                }}
              />
              <List>
                {paginatedData.map((item, index) => (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="text"
                          startIcon={<CustomDownloadIcon />}
                          onClick={handleDownloadClick}
                        >
                          Télécharger
                        </Button>
                        <Button
                          variant="text"
                          endIcon={<VisibilityIcon />}
                          sx={{
                            color: "#d8a4e0",
                            "&:hover": {
                              color: "darkviolet",
                            },
                          }}
                        >
                          Voir
                        </Button>
                      </Stack>
                    }
                  >
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              <TablePagination
                component="div"
                count={filteredData.length}
                page={coursPage}
                onPageChange={handleCoursPageChange}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleRowsPerPageChange}
                labelRowsPerPage="Lignes par page"
                labelDisplayedRows={({ from, to, count }) =>
                  `${from}-${to} sur ${count}`
                }
              />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
