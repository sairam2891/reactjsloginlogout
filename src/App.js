import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <div>
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

      </div>

      
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
        </div>
    </nav>

    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  </div>
  );
}

export default App;
