import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { Dashboard } from "../../pages/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

export const RoutesMain = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const userLogout = () => {
    localStorage.removeItem("@token");
    localStorage.removeItem("@data");
    setUser(null);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register userLogout={userLogout} />} />
      <Route
        path="/dashboard"
        element={<Dashboard user={user} userLogout={userLogout} />}
      />
    </Routes>
  );
};
