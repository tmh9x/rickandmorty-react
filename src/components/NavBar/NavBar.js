import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./NavBar.css";

export default function NavBar({ getInput }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Rick and Morty API
          </Typography>
          <input
            type="text"
            className="searchField"
            onChange={getInput}
            placeholder="Search"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
