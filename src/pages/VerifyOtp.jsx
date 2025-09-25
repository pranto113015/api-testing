// src/pages/VerifyOtp.jsx
import React, { useState } from "react";
import axios from "axios";

export default function VerifyOtp() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // OTP Verify Handler
  const handleVerify = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);
    try {
      const res = await axios.post(
        "https://apitest.softvencefsd.xyz/api/verify_otp",
        { email, otp }
      );
      setMsg("✅ OTP verification successful!");
      console.log("Verify Response:", res.data);
    } catch (err) {
      console.error(err);
      setMsg(err.response?.data?.message || "❌ Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP Handler
  const handleResend = async () => {
    setMsg("");
    setLoading(true);
    try {
      const res = await axios.post(
        "https://apitest.softvencefsd.xyz/api/resend_otp",
        { email }
      );
      setMsg("🔄 OTP resent to your email.");
      console.log("Resend Response:", res.data);
    } catch (err) {
      console.error(err);
      setMsg(err.response?.data?.message || "❌ Resend failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Verify OTP</h1>
        {msg && <p className="text-center mb-4 text-sm text-red-600">{msg}</p>}

        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">OTP</label>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={handleResend}
            disabled={loading || !email}
            className="text-blue-600 hover:underline disabled:opacity-50"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
}
