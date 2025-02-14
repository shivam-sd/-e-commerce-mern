import React, { useState } from "react";
import Header from "../components/Header";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
// import { FiEye } from "react-icons/fi";
// import { FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [Error, setError] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleFormData = async (e) => {
    e.preventDefault();
    const SignupData = {
      fullname: fullname,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    if (password !== confirmPassword) {
      return toast.error(`Password or ConfirmPassword Not match`, {
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
    console.log(SignupData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/register`,
        SignupData
      );
      const data = response.data;
      console.log(data);
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
    } catch (err) {
      if (err.response.data.errors) {
        toast.error(`${err.response.data.errors}`, {
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
        // setError(err.response.data.errors);
      }
      if (err.response.data.errors[0].msg) {
        // toast.error(`${err.response.data.errors[0].msg}`, {
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: false,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        //   transition: Bounce,
        // });
        setError(err.response.data.errors[0].msg);
      }
      console.log("Error", err);
    }
  };
  return (
    <div className="mx-auto container flex justify-between flex-col">
      <Header />
      <div className="forms  lg:h-auto md:h-auto lg:flex lg:items-center lg:justify-center mt-8">
        <form
          onSubmit={handleFormData}
          className="border border-gray-400 h-auto p-4 flex flex-col rounded-sm relative lg:overflow-auto overflow-y-scroll"
        >
          <h1 className="flex items-center justify-center gap-2 text-xl font-bold">
            <FaUserAlt />
            User Signup
          </h1>
          <label className="mt-3 text-xl" htmlFor="fullname">
            FullName:-
          </label>
          <input
            className="mt-1 lg:w-80 md:w-80 h-8 rounded-sm text-lg pl-1 outline-none focus-within:shadow-md border border-slate-400"
            type="text"
            id="fullname"
            onChange={(e) => setFullName(e.target.value)}
            value={fullname}
            placeholder="Enter Your Email"
          />
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
          <label className="mt-3 text-xl" htmlFor="Confirmpassword">
            Confirm Password:-
          </label>
          <input
            className="mt-1 lg:w-80 md:w-80 h-8 rounded-sm text-lg pl-1 outline-none focus-within:shadow-md border border-slate-400 relative"
            type="password"
            id="Confirmpassword"
            placeholder="Enter Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* <p className="absolute top-[170px] left-[305px] text-xl cursor-pointer" onClick={() => setShowPassword((prev) =>! prev)}>{
            setShowPassword ? <FiEye /> : <FaRegEyeSlash />
            }</p> */}

          <span className="text-center text-red-500 font-bold">{Error}</span>

          <button
            type="submit"
            className="bg-blue-600 text-white p-1 text-xl cursor-pointer duration-300 hover:bg-blue-500 mt-2 active:scale-90"
          >
            Register
          </button>
          <p className="flex items-center justify-center mt-1 font-bold">
            Allready have an account:-
            <Link
              to="/login"
              className="duration-300 hover:underline hover:text-red-500 ml-1 font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
