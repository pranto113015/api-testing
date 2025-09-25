// src/pages/UserDetail.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserDetail() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setMsg("");
      try {
        // ধরুন লগইনের পরে token localStorage তে "token" key তে সেভ করা হয়েছে
        const token = localStorage.getItem("token");
        if (!token) {
          setMsg("❌ Token পাওয়া যায়নি। আগে লগইন করুন।");
          setLoading(false);
          return;
        }

        const res = await axios.get(
          "https://apitest.softvencefsd.xyz/api/user-detail",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data?.data || res.data);
      } catch (err) {
        console.error(err);
        setMsg(err.response?.data?.message || "❌ ইউজার ডিটেল আনা যায়নি");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading user details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">User Detail</h1>

        {msg && <p className="text-center mb-4 text-sm text-red-600">{msg}</p>}

        {user ? (
          <div className="space-y-3 text-sm">
            <p>
              <span className="font-semibold">First Name:</span>{" "}
              {user.first_name}
            </p>
            <p>
              <span className="font-semibold">Last Name:</span> {user.last_name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            {/* প্রয়োজন হলে আরও ফিল্ড এখানে দেখাতে পারবেন */}
          </div>
        ) : (
          !msg && (
            <p className="text-center text-gray-500">কোন ডেটা পাওয়া যায়নি।</p>
          )
        )}
      </div>
    </div>
  );
}
