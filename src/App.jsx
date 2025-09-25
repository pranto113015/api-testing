import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import UserDetail from "./pages/UserDetail";
import ForgotVerifyOtp from "./pages/ForgotVerifyOtp";
import ResendOtp from "./pages/ResendOtp";
import Logout from "./pages/Logout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-emerald-600 text-white p-3 flex gap-4 text-sm">
        <Link to="/home-page">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/verify-otp">Verify OTP</Link>
        <Link to="/forgot-password">Forgot</Link>
        <Link to="/reset-password">Reset</Link>
        <Link to="/user-detail">User</Link>
        <Link to="/forgot-verify-otp">Forgot Verify OTP</Link>
        <Link to="/resend-otp">Resend OTP</Link>
        <Link to="/logout">Logout</Link>
      </nav>
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user-detail" element={<UserDetail />} />
        <Route path="/forgot-verify-otp" element={<ForgotVerifyOtp />} />
        <Route path="/resend-otp" element={<ResendOtp />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}
