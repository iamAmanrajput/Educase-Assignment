import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 170,
      damping: 20,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};

const fieldStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 340,
      damping: 24,
      ease: "easeOut",
    },
  },
};

const radioVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 20, delay: 0.95 },
  },
};

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, name, type } = e.target;
    if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation rules
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.agency) newErrors.agency = "Please select an option";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    localStorage.setItem("signupData", JSON.stringify(formData));
    toast.success("Signup Successfully");
    navigate("/signin");
  };

  return (
    <motion.div className="min-h-screen px-4 sm:p-0 flex items-center justify-center bg-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full sm:w-[375px] mx-auto bg-white flex flex-col justify-start px-6 py-12 sm:py-10 hover:shadow-xl duration-200 rounded-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 24,
            delay: 0.21,
            ease: "easeOut",
          }}
          className="text-2xl font-bold text-gray-900 mb-5"
        >
          Create your <br /> PopX account
        </motion.h1>
        <motion.form
          variants={fieldStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <motion.div variants={fieldVariants} className="relative">
            <label
              htmlFor="name"
              className="absolute -top-0 left-3 px-1 bg-white text-violet-600 text-sm font-semibold pointer-events-none z-10"
              style={{ transform: "translateY(-50%)" }}
            >
              Full Name*
            </label>
            <input
              id="name"
              type="text"
              placeholder="Marry Doe"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors placeholder-gray-400 bg-transparent ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-violet-400"
              }`}
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </motion.div>
          <motion.div variants={fieldVariants} className="relative">
            <label
              htmlFor="phone"
              className="absolute -top-0 left-3 px-1 bg-white text-violet-600 text-sm font-semibold pointer-events-none z-10"
              style={{ transform: "translateY(-50%)" }}
            >
              Phone number*
            </label>
            <input
              id="phone"
              type="text"
              placeholder="123-456-7890"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors placeholder-gray-400 bg-transparent ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-violet-400"
              }`}
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </motion.div>
          <motion.div variants={fieldVariants} className="relative">
            <label
              htmlFor="email"
              className="absolute -top-0 left-3 px-1 bg-white text-violet-600 text-sm font-semibold pointer-events-none z-10"
              style={{ transform: "translateY(-50%)" }}
            >
              Email address*
            </label>
            <input
              id="email"
              type="email"
              placeholder="email@example.com"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors placeholder-gray-400 bg-transparent ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-violet-400"
              }`}
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>
          <motion.div variants={fieldVariants} className="relative">
            <label
              htmlFor="password"
              className="absolute -top-0 left-3 px-1 bg-white text-violet-600 text-sm font-semibold pointer-events-none z-10"
              style={{ transform: "translateY(-50%)" }}
            >
              Password*
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors placeholder-gray-400 bg-transparent ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-violet-400"
              }`}
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </motion.div>
          <motion.div variants={fieldVariants} className="relative">
            <label
              htmlFor="company"
              className="absolute -top-0 left-3 px-1 bg-white text-violet-600 text-sm font-semibold pointer-events-none z-10"
              style={{ transform: "translateY(-50%)" }}
            >
              Company name
            </label>
            <input
              id="company"
              type="text"
              placeholder="Company Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition-colors placeholder-gray-400 bg-transparent"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            variants={radioVariants}
            className="mt-2 mb-2 flex flex-col gap-2"
          >
            <span className="text-gray-700 text-sm font-semibold mb-1">
              Are you an Agency?<span className="text-violet-600">*</span>
            </span>
            <div className="flex gap-8 ml-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="form-radio text-violet-600 accent-violet-600 focus:ring-violet-600"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                />
                <span className="text-gray-700 text-base">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="form-radio text-violet-600 accent-violet-600 focus:ring-violet-600"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                />
                <span className="text-gray-700 text-base">No</span>
              </label>
            </div>
            {errors.agency && (
              <p className="text-red-500 text-sm mt-1">{errors.agency}</p>
            )}
          </motion.div>
          <motion.button
            variants={fieldVariants}
            type="submit"
            className="w-full py-3 mt-3 rounded-md bg-violet-600 text-white font-semibold hover:bg-violet-700 active:scale-95 transition-transform duration-200 cursor-pointer"
          >
            Create Account
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
