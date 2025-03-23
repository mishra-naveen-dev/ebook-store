import React, { useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { InputField } from "../loginpage/LoginPage/InputField";
import "./Responsive.css";
import "../loginpage/LoginPage/loginpage.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [questionChoice, setQuestionChoice] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/customer/forgot-password",
        {
          email,
          questionChoice,
          answer,
        }
      );

      toast.success("Verification successful. Reset link sent.");
      navigate("/reset-password");
    } catch (err) {
      setError(err.response?.data?.message || "Verification failed");
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
        <h2 className="form-title">Forgot Password</h2>
        <p className="separator">
          <span>Enter details to verify</span>
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <InputField
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Security Question Dropdown */}
          <select
            className="input-field mb-3"
            value={questionChoice}
            onChange={(e) => setQuestionChoice(e.target.value)}
          >
            <option value="">Select Security Question</option>
            <option value="pet">What is your pet’s name?</option>
            <option value="mother">What is your mother’s maiden name?</option>
            <option value="city">In which city were you born?</option>
          </select>

          <InputField
            type="text"
            placeholder="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Verifying..." : "Submit"}
          </button>

          <p className="signup-text">
            Remembered your password? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default ForgotPassword;
