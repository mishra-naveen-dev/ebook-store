import React, { useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { InputField } from "../LoginPage/InputField";
import SocialLogin from "../LoginPage/SocialLogin";
import "../Responsive.css";
import "../LoginPage/loginpage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    questionChoice: "",
    answer: "",
    password: "",
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/customer/signup",
        formData
      );
      toast.success("Signup successful");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      toast.error(err.response?.data?.message || "Signup error");
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
        <h2 className="form-title">Sign Up</h2>

        <SocialLogin />
        <p className="separator">
          <span>or</span>
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputField
            type="text"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          <InputField
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          {/* Security Question Dropdown */}
          <select
            className="input-field mb-3 inputChoice"
            name="questionChoice"
            value={formData.questionChoice}
            onChange={handleChange}
          >
            <option value="">Select Security Question</option>
            <option value="pet">What is your pet’s name?</option>
            <option value="mother">What is your mother’s maiden name?</option>
            <option value="city">In which city were you born?</option>
          </select>

          <InputField
            type="text"
            placeholder="Answer"
            name="answer"
            value={formData.answer}
            onChange={handleChange}
          />
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="signup-text">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default SignupPage;
