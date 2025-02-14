import React, { useState } from "react";
import Header from "../components/Header";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import {toast ,Bounce} from "react-toastify";
// import { FiEye } from "react-icons/fi";
// import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
    const [Error , setError] = useState("");
    const [email , setemail] = useState("");
    const [password , setPassword] = useState("");
    const handleFormData = async (e) => {
        e.preventDefault();
        const LoginData = {
            email:email,
            password:password
        }
        console.log(LoginData);
        try{
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login` , LoginData);
          const data = response.data;
          console.log(data);
          // localStorage.setItem("UserToken" , JSON.stringify(data.token));
          toast.success(`${data.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        }catch(err){
          if(err.response.data.error){
            toast.error(`${err.response.data.error}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
              });
          }

            // if(err.response.data.errors[0].msg){
            //   setError(err.response.data.errors[0].msg);
            // }
          console.log("Error in Login", err);
        }
    }
  return (
    <div className="mx-auto container">
      <Header />
      <div className="forms  lg:h-auto md:h-auto lg:flex lg:items-center lg:justify-center mt-16">
        <form onSubmit={handleFormData} className="border border-gray-400 h-auto p-4 flex flex-col rounded-sm relative">
          <h1 className="flex items-center justify-center gap-2 text-xl font-bold">
            <FaUserAlt />
           User Login
          </h1>
          <label className="mt-3 text-xl" htmlFor="email">
            Email:-
          </label>
          <input
            className="mt-1 lg:w-80 md:w-80 h-8 rounded-sm text-lg pl-1 outline-none focus-within:shadow-md border border-slate-400"
            type="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            placeholder="Enter Your Email"
          />
          <label className="mt-3 text-xl" htmlFor="password">
            Password:-
          </label>
          <input
            className="mt-1 lg:w-80 md:w-80 h-8 rounded-sm text-lg pl-1 outline-none focus-within:shadow-md border border-slate-400 relative"
            type="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <p className="absolute top-[170px] left-[305px] text-xl cursor-pointer" onClick={() => setShowPassword((prev) =>! prev)}>{
            setShowPassword ? <FiEye /> : <FaRegEyeSlash />
            }</p> */}

          <Link to="/forgot-password" className="flex items-center justify-end mt-1 duration-300 hover:underline hover:border-red-400 hover:text-red-500 cursor-pointer">
            Forgot Password ?
          </Link>
          {/* <span className="text-center text-rose-500 font-bold">{Error}</span> */}
          <button
            type="submit"
            className="bg-blue-600 text-white p-1 text-xl cursor-pointer duration-300 hover:bg-blue-500 mt-2 active:scale-90"
          >
            Login
          </button>
          <p className="flex items-center justify-center mt-1">
            don't have an account:-
            <Link to="/signup" className="duration-300 hover:underline ml-1 ">Sign in</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
