import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from "./components/login";
import Home from "./components/home";
import Profile from "./components/profile";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

function App() {

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);


  return (
    <div >
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/"} className="navbar-brand">
        My reactJsApp
      </Link>
     

      <div className="navbar-nav mr-auto">
      
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>

       {currentUser !== null && (
        <li className="navbar-brand">{currentUser.email}</li> 
       )}

      </div>

     
        <div className="navbar-nav ml-auto">
        {!currentUser ? ( 
              <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
              </li>):(

              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
          )}
        </div>

      
    </nav>
    

    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>

  </div>
  );
}

export default App;
