import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./forgotpassword.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3005/api/auth/forgot-password",
        {
          email,
          answer,
          newPassword,
        }
      );

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Answer to security question"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
