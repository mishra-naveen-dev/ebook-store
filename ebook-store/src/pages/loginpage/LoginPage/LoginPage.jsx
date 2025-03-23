import React, { useState, useEffect } from "react";
import { Container, Button, Typography } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { InputField } from "./InputField";
import SocialLogin from "./SocialLogin";
import "../Responsive.css";
import "./loginpage.css";

const LoginPage = () => {
  // State to hold email, password & loading/error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating loading state
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/customer/login",
        {
          email,
          password,
        }
      );

      // Save token in local storage
      const { token } = response.data;
      localStorage.setItem("token", token);

      toast.success("Login successful");
      setEmail("");
      setPassword("");

      // Redirect after successful login
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      toast.error(err.response?.data?.message || "Invalid credentials");
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
