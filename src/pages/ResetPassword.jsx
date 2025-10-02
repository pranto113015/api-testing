import React, { useState } from "react";
import axios from "axios";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    if (password !== passwordConfirmation) {
      setMsg("❌ Password and Confirm Password do not match.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "https://apitest.softvencefsd.xyz/api/reset-password",
        {
          email,
          otp,
          password,
          password_confirmation: passwordConfirmation,
        }
      );
      setMsg(res.data?.message || "✅ Password reset successful.");
      console.log("Reset Password Response:", res.data);
    } catch (err) {
      console.error(err);
      setMsg(err.response?.data?.message || "❌ Reset failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Reset Password</h1>
        {msg && <p className="text-center mb-4 text-sm text-red-600">{msg}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">OTP Code</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Confirm New Password
            </label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
