import React from "react";
import Homepage from "./pages/Hompage";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AccountSettings from "./pages/AccountSettings";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account-setting" element={<AccountSettings />} />
      </Routes>
    </div>
  );
};

export default App;
