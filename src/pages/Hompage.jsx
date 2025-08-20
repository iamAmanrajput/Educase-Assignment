import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 20,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};

const buttonsStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.45 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 26,
      ease: "easeOut",
    },
  },
};

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <motion.div className="min-h-screen px-4 sm:p-0 flex items-center justify-center bg-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full sm:w-[375px] h-[80vh] mx-auto bg-white flex flex-col justify-end px-6 py-12 sm:py-10 hover:shadow-xl duration-200 rounded-2xl"
      >
        <motion.div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="text-2xl font-bold text-gray-900 mb-2"
          >
            Welcome to PopX
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 360,
              damping: 24,
              delay: 0.48,
              ease: "easeOut",
            }}
            className="text-gray-500 text-base font-normal"
          >
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </motion.p>
        </motion.div>
        <motion.div
          variants={buttonsStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3"
        >
          <motion.button
            onClick={() => navigate("/signup")}
            variants={buttonVariants}
            className="w-full py-3 rounded-md bg-violet-600 text-white font-semibold hover:bg-violet-700 hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer"
          >
            Create Account
          </motion.button>
          <motion.button
            variants={buttonVariants}
            onClick={() => navigate("/signin")}
            className="w-full py-3 rounded-md bg-violet-100 text-violet-700 font-semibold hover:bg-violet-200 hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer"
          >
            Already Registered? Login
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
