import React, { useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import "../Responsive.css";
import "./forgotpassword.css"; // Forgot Password specific styles

const ForgotPassword = () => {
  // State variables
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [questionChoice, setQuestionChoice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle password reset
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3005/api/auth/forgot-password",
        {
          email,
          answer,
          newPassword,
          questionChoice,
        }
      );

      toast.success(response.data.message);
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setError(error.response?.data?.error || "Failed to reset password");
      toast.error(error.response?.data?.error || "Reset failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="forgot-password-main ">
      <Toaster />
      <div className="forgot-password-container ">
        <h2 className="form-title">Reset Password</h2>

        <form className="forgot-password-form" onSubmit={handleSubmit}>
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Security Question Dropdown */}
          <select
            value={questionChoice}
            onChange={(e) => setQuestionChoice(e.target.value)}
            required
          >
            <option value="">Select Security Question</option>
            <option value="pet">What is your pet’s name?</option>
            <option value="mother">What is your mother’s maiden name?</option>
            <option value="city">In which city were you born?</option>
          </select>

          {/* Answer Input */}
          <input
            type="text"
            placeholder="Answer to security question"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />

          {/* New Password Input */}
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          {/* Show Error if Exists */}
          {error && <p className="error-message">{error}</p>}

          {/* Reset Password Button */}
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>

          {/* Back to Login */}
          <p className="back-to-login">
            Remembered your password? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default ForgotPassword;
