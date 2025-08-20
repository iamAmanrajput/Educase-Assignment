import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 20,
      delay: 0.13,
      ease: "easeOut",
    },
  },
};
const fieldStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22, delayChildren: 0.38 } },
};
const fieldVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 24,
      ease: "easeOut",
    },
  },
};

const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedInfoStr = localStorage.getItem("signupData");
    if (!storedInfoStr) {
      toast.error("No user found. Please sign up first.");
      return;
    }

    const storedInfo = JSON.parse(storedInfoStr);

    if (
      formData.email !== storedInfo.email ||
      formData.password !== storedInfo.password
    ) {
      toast.error("Invalid email or password");
      return;
    }

    toast.success("Sign In Successfully");
    navigate("/account-setting");
  };

  return (
    <motion.div className="min-h-screen px-4 sm:p-0 flex items-center justify-center bg-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full sm:w-[375px] h-[80vh] mx-auto bg-white flex flex-col justify-start px-6 py-12 sm:py-10 hover:shadow-xl duration-200 rounded-2xl"
      >
        <motion.div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              delay: 0.21,
              ease: "easeOut",
            }}
            className="text-2xl font-bold text-gray-900 mb-2"
          >
            Signin to your <br /> PopX account
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 360,
              damping: 24,
              delay: 0.36,
              ease: "easeOut",
            }}
            className="text-gray-500 text-base font-normal"
          >
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fieldStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <motion.div variants={fieldVariants} className="relative">
            <label
              htmlFor="email"
              className="absolute -top-0 left-3 px-1 bg-white text-violet-600 text-sm font-semibold pointer-events-none z-10"
              style={{ transform: "translateY(-50%)" }}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                error && !formData.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition-colors placeholder-gray-400 bg-transparent`}
              autoComplete="email"
            />
          </motion.div>

          <motion.div variants={fieldVariants} className="relative">
            <label
              htmlFor="password"
              className="absolute -top-0 left-3 px-1 bg-white text-violet-600 text-sm font-semibold pointer-events-none z-10"
              style={{ transform: "translateY(-50%)" }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                error && !formData.password
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition-colors placeholder-gray-400 bg-transparent`}
              autoComplete="current-password"
            />
          </motion.div>

          {/* Show Error */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm font-medium"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            variants={fieldVariants}
            type="submit"
            className="w-full py-3 mt-1 rounded-md bg-gray-200 text-gray-700 font-semibold transition hover:bg-gray-300 active:scale-95 cursor-pointer"
          >
            Login
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Signin;
