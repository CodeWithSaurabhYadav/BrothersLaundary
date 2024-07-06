import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import HEXTextField from "../../components/ui/HEXTextField";
import Logo from "../../assets/logos/logo.svg";

import anim from "./anim";

import login from "./firebase/login";

const Login = () => {
  
  const navigate = useNavigate();

  const userToken = localStorage.getItem('token')

  if (userToken) {
    navigate("/dashboard");
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-[90%] md:w-[50%] lg:w-[50%] xl:w-[40%] h-[90%] md:h-[30%] lg:h-[30%] bg-brand-color-lighter p-5 rounded-xl text-black z-10 justify-center items-center gap-10">
      <div className="relative flex flex-col md:flex-1 lg:flex-1">
        <img src={Logo} alt="logo" className="w-[120px]" />
        <h1 className="text-5xl font-semibold">Sign in</h1>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          variants={anim.fadeInRight}
          initial="initial"
          animate="enter"
          exit="exit"
          className="relative flex flex-col justify-center items-center md:flex-1 lg:flex-1"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login(formData, navigate)
            }}
            className="flex flex-col gap-5 w-full items-center justify-center"
          >
            <HEXTextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <HEXTextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="flex justify-end w-[80%] gap-4">
              {" "}
              <motion.button
                variants={{
                  hover: {
                    opacity: 0.8,
                    transition: {
                      duration: 0.3,
                      yoyo: Infinity,
                    },
                  },
                }}
                whileHover="hover"
                onClick={() => navigate("/auth/register")}
                className="px-6 py-2 rounded-md w-max border border-2 border-brand-color-default text-brand-color-default"
              >
                Create Account
              </motion.button>
              <motion.button
                variants={{
                  hover: {
                    opacity: 0.8,
                    transition: {
                      duration: 0.3,
                      yoyo: Infinity,
                    },
                  },
                }}
                whileHover="hover"
                type="submit"
                className="px-6 py-2 rounded-md w-max bg-brand-color-default text-white"
              >
                Login
              </motion.button>
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Login;
