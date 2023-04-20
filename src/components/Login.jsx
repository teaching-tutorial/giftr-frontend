import { Link, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useToken from "../context/TokenContext";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const authApiUrl = "http://localhost:3001/";
const loginUrl = `${authApiUrl}auth/google?redirect_uri=${window.location.href}login/savetoken`;
const logoutUrl = `${authApiUrl}auth/logout`

const Login = () => {
  const { removeToken, token } = useToken();
  // const responseMessage = (response) => {
  //   console.log(response);
  // };
  // const errorMessage = (error) => {
  //   console.log(error);
  // };
  // const [user, setUser] = useState([]);
  // const [profile, setProfile] = useState([]);


  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    removeToken();
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Giftr
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
      <header>
        {!token && <div className="loginButton"><Link to={loginUrl}> <Button classname="loginBtn">Sign in with Google 🚀 </Button> </Link></div> }
        {token && (
           <div>
            {/* <img src={profile.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br /> */}

            <Link to="/people">
              <button>People List</button>
            </Link>
            <button onClick={logOut}>Log out</button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Login;
