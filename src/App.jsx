import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  // const navigate = useNavigate();

  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       console.log("User is logged in");
  //       navigate("/");
  //     } else {
  //       console.log("User is not logged in");
  //       navigate("/login");
  //     }
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
