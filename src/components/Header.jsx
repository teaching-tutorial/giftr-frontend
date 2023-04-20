import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate, Link } from "react-router-dom";
import useToken from "../context/TokenContext";
import { useEffect, useState } from "react";



export default function Header() {
    const navigate = useNavigate();
    const { removeToken } = useToken();
    const [addPeople, setAddPeople] = useState(false);

  function doLogout() {
    removeToken();
    //navigate to the login route
    navigate("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={doLogout}>
            <ExitToAppIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Giftr
          </Typography>
          <Link to="/addpeople"><Button className="addPerson" color="inherit"onClick={() => setAddPeople(true)}><AddBoxIcon /></Button></Link>          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
