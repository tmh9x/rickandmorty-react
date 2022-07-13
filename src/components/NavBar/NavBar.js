import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
/* import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton"; */
import { TextField } from "@mui/material";

export default function NavBar({ getInput }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Rick and Morty API
          </Typography>
          <div className="searchField">
            <TextField
              id="outlined-basic"
              onChange={getInput}
              variant="filled"
              fullWidth
              label="Search Character"
              size="small"
              focused
            />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
