import React, { useRef, useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../LoginPage/SocialLogin";
import "../Responsive.css";
import "./signup.css";

const SignupPage = () => {
  // UseRefs for input fields
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const countryRef = useRef();
  const addressRef = useRef();
  const questionChoiceRef = useRef();
  const answerRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (!nameRef.current.value.trim()) newErrors.name = "Full Name is required";
    if (!emailRef.current.value.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(emailRef.current.value))
      newErrors.email = "Invalid email format";

    if (!phoneRef.current.value.trim())
      newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phoneRef.current.value))
      newErrors.phone = "Phone must be 10 digits";

    if (!countryRef.current.value.trim())
      newErrors.country = "Country is required";
    if (!addressRef.current.value.trim())
      newErrors.address = "Address is required";
    if (!questionChoiceRef.current.value)
      newErrors.questionChoice = "Select a security question";
    if (!answerRef.current.value.trim())
      newErrors.answer = "Security answer is required";
    if (!passwordRef.current.value.trim())
      newErrors.password = "Password is required";
    else if (passwordRef.current.value.length < 6)
      newErrors.password = "Password must be at least 6 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setIsLoading(true);

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      country: countryRef.current.value,
      address: addressRef.current.value,
      questionChoice: questionChoiceRef.current.value,
      answer: answerRef.current.value,
      password: passwordRef.current.value,
    };

    console.log("Submitting Form Data:", formData); // Debugging

    try {
      const response = await axios.post(
        "http://localhost:3005/api/auth/register",
        formData
      );
      toast.success(response.data.message || "Signup successful");
      navigate("/login");
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Signup failed";
      setErrors((prev) => ({ ...prev, global: errorMsg }));
      toast.error(errorMsg);
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

        {/* Social Login Component */}
        <SocialLogin />
        <p className="separator">
          <span>or</span>
        </p>

        {/* Signup Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" ref={nameRef} />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <input type="email" placeholder="Email Address" ref={emailRef} />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <input type="text" placeholder="Phone Number" ref={phoneRef} />
          {errors.phone && <p className="error-message">{errors.phone}</p>}

          <input type="text" placeholder="Country" ref={countryRef} />
          {errors.country && <p className="error-message">{errors.country}</p>}

          <input type="text" placeholder="Address" ref={addressRef} />
          {errors.address && <p className="error-message">{errors.address}</p>}

          {/* Security Question Dropdown */}
          <select
            ref={questionChoiceRef}
            className="input-field mb-3 inputChoice"
          >
            <option value="">Select Security Question</option>
            <option value="pet">What is your pet’s name?</option>
            <option value="mother">What is your mother’s maiden name?</option>
            <option value="city">In which city were you born?</option>
          </select>
          {errors.questionChoice && (
            <p className="error-message">{errors.questionChoice}</p>
          )}

          <input type="text" placeholder="Answer" ref={answerRef} />
          {errors.answer && <p className="error-message">{errors.answer}</p>}

          <input type="password" placeholder="Password" ref={passwordRef} />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}

          {/* Show global error */}
          {errors.global && <p className="error-message">{errors.global}</p>}

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
