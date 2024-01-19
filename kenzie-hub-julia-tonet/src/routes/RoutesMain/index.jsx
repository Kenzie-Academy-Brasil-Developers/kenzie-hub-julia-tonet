import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { Dashboard } from "../../pages/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";

export const RoutesMain = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
