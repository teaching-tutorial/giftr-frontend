import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";

export default function HeaderGift({ setAddGift }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/people">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ExitToAppIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Giftr
          </Typography>
          <Button
            className="addPerson"
            color="inherit"
            onClick={() => setAddGift(true)}
          >
            <AddBoxIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
