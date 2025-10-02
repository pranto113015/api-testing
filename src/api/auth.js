import axios from "axios";

// base URL
const api = axios.create({
    baseURL: "https://apitest.softvencefsd.xyz/api",
    headers: { "Content-Type": "application/json" },

});

// User Auth APIs
export const registerUser = (data) => api.post("/register", data);
export const loginUser = (data) => api.post("/login", data);
export const resendOtp = (data) => api.post("/resend_otp", data);
export const verifyOtp = (data) => api.post("/verify_otp", data);
export const forgotPassword = (data) => api.post("/forgot-password", data);
export const forgotVerifyOtp = (data) => api.post("/forgot-verify-otp", data);
export const resetPassword = (data) => api.post("/reset-password", data);
export const logoutUser = (token) =>
    api.post("/logout", {}, { headers: { Authorization: `Bearer ${token}` } });
export const userDetail = (token) =>
    api.get("/user-detail", { headers: { Authorization: `Bearer ${token}` } });

export default api;
