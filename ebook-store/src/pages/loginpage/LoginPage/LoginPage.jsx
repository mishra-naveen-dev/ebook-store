import React, { useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { InputField } from "./InputField";
import SocialLogin from "./SocialLogin";
import "../Responsive.css";
import "./loginpage.css";

const LoginPage = () => {
  // State variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Send login request to backend
      const response = await axios.post(
        "http://localhost:3005/api/auth/login",
        {
          email,
          password,
        }
      );

      // Extract token from response
      const { token, user } = response.data;


      // Store token and user data in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Success message and redirect
      toast.success("Login successful!");
      setTimeout(() => navigate("/profilepage", { replace: true }), 1000);
    } catch (err) {
      setError(err.response?.data?.error || "Invalid email or password");
      toast.error(err.response?.data?.error || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      className="login-main"
      maxWidth="sm"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <Toaster />
      <div className="login-container">
        <h2 className="form-title">Log in with</h2>

        {/* Social Media Login (Google/Apple) */}
        <SocialLogin />

        <p className="separator">
          <span>or</span>
        </p>

        {/* LOGIN FORM */}
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email Input */}
          <InputField
            type="email"
            placeholder="Email address"
            icon="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <InputField
            type="password"
            placeholder="Password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Show Error if Exists */}
          {error && <p className="error-message">{error}</p>}

          {/* Forgot Password */}
          <Link to="/forgot-password" className="forget-pass-link">
            Forgot Password?
          </Link>

          {/* Login Button */}
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}
          </button>

          {/* Signup Link */}
          <p className="signup-text">
            Don't have an account? <Link to="/signup">Signup now</Link>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
