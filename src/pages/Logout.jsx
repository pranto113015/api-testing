import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const [msg, setMsg] = useState("Logging out...");
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setMsg("❌ Token not found. Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
        return;
      }

      try {
        await axios.post(
          "https://apitest.softvencefsd.xyz/api/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        localStorage.removeItem("token");
        setMsg("✅ Successfully logged out. Redirecting to login...");
        console.log("Response Logout successful");
        setTimeout(() => navigate("/login"), 1500);
      } catch (err) {
        console.error(err);
        setMsg("❌ Logout failed. Redirecting to login...");
        localStorage.removeItem("token");
        setTimeout(() => navigate("/login"), 1500);
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-center text-gray-700">{msg}</p>
    </div>
  );
}
