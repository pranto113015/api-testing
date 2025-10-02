import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handler when input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handler when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const res = await axios.post(
        "https://apitest.softvencefsd.xyz/api/register",
        formData
      );
      setMessage("✅ Registration successful! Check your email for OTP.");
      console.log("Registration Response:", res.data);
    } catch (err) {
      console.error(err);
      setMessage(
        err.response?.data?.message || "❌ Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
        {message && (
          <p className="text-center mb-4 text-sm text-red-600">{message}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              I agree to the terms & conditions
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
