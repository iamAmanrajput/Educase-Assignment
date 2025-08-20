import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 22, delay: 0.15 },
  },
};

const profileVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 360, damping: 28, delay: 0.22 },
  },
};

const infoVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 340, damping: 26, delay: 0.32 },
  },
};

const AccountSettings = () => {
  const fileRef = useRef();
  const [profileImg, setProfileImg] = useState(
    "https://randomuser.me/api/portraits/men/42.jpg"
  );
  const [userInfo, setUserInfo] = useState({
    name: "Marry Doe",
    email: "Marry@Gmail.com",
  });

  useEffect(() => {
    const info = localStorage.getItem("signupData");
    if (info) {
      setUserInfo(JSON.parse(info));
    }
  }, []);

  const handleImageClick = () => {
    fileRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div className="min-h-screen px-6 sm:px-0 flex items-center justify-center bg-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md h-[70vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="px-8 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-3xl shadow-lg">
          <h2 className="text-white font-extrabold text-xl tracking-wide drop-shadow-lg">
            Account Settings
          </h2>
        </div>

        <motion.div
          variants={profileVariants}
          className="flex items-center gap-6 px-8 py-6 bg-white shadow-inner rounded-b-3xl"
        >
          <div className="relative">
            <img
              src={profileImg}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover"
            />
            <button
              type="button"
              onClick={handleImageClick}
              className="absolute bottom-0 right-0 bg-gradient-to-tr from-purple-600 to-indigo-500 p-2 rounded-full shadow-lg hover:scale-110 transform transition cursor-pointer"
              title="Change Photo"
            >
              <FaCamera className="text-white" />
            </button>
            <input
              type="file"
              ref={fileRef}
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-semibold text-gray-900 text-lg drop-shadow-sm">
              {userInfo.name}
            </span>
            <a
              href="mailto:Marry@Gmail.Com"
              className="text-indigo-600 text-sm font-medium hover:underline"
            >
              {userInfo.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={infoVariants}
          className="px-8 py-5 text-gray-800 text-[14px] leading-relaxed bg-gray-50 rounded-b-3xl shadow-inner"
        >
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AccountSettings;
