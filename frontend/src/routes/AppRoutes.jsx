import { Routes, Route, Navigate } from "react-router-dom";  // ✅ include Navigate
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Register from "../features/auth/pages/Signup";
import Login from "../features/auth/pages/Login";
import VerifyEmail from "../features/auth/pages/VerifyEmail";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Default: redirect root (/) to /register */}
      <Route path="/" element={<Navigate to="/register" replace />} />

      {/* Public Routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-email" element={<VerifyEmail />} />

      {/* Protected Routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}