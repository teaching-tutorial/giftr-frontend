import { Link, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useToken from "../context/TokenContext";

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
      <header>
        <h1>Giftr App</h1>
        {!token && <Link to={loginUrl}>Sign in with Google 🚀 </Link> }
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
