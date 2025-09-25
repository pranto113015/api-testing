import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import UserDetail from "./pages/UserDetail";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-emerald-600 text-white p-3 flex gap-4 text-sm">
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/verify-otp">Verify OTP</Link>
        <Link to="/forgot-password">Forgot</Link>
        <Link to="/reset-password">Reset</Link>
        <Link to="/user-detail">User</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user-detail" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
