// src/pages/ResendOtp.jsx
import React, { useState } from "react";
import axios from "axios";

export default function ResendOtp() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleResend = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://apitest.softvencefsd.xyz/api/resend_otp",
        { email }
      );
      setMsg(res.data?.message || "✅ নতুন OTP আপনার ইমেইলে পাঠানো হয়েছে");
      console.log("Resend OTP Response:", res.data);
    } catch (err) {
      console.error(err);
      setMsg(
        err.response?.data?.message || "❌ OTP পুনরায় পাঠাতে ব্যর্থ হয়েছে"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Resend OTP</h1>

        {msg && <p className="text-center mb-4 text-sm text-red-600">{msg}</p>}

        <form onSubmit={handleResend} className="space-y-4">
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Resend OTP"}
          </button>
        </form>
      </div>
    </div>
  );
}
