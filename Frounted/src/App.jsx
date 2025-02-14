import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPage from "./pages/ForgotPage";
import Option from "./pages/Option";
import {ToastContainer} from "react-toastify";
import Context from "./context/Context";
import axios from "axios";

const App = () => {
  const fetchUserDetail = async () => {
   try{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/details`);
    const data = response.data;
    console.log("User Detail -> ",data);
   }catch(error){
    console.log("error ", error);
   }
  }
  useEffect(() => {
    fetchUserDetail()
  } , []);

  return (
    <div>
      <Context.Provider value={fetchUserDetail}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-option" element={<Option />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgot-password" element={<ForgotPage />} />
      </Routes>
      </Context.Provider>
    </div>
  );
};

export default App;
