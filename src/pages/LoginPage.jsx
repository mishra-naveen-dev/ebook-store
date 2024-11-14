import React, { useState } from "react";
import { Container, Button, Typography } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/customer/login", {
        email,
        password,
      });
      console.log(response.data);
      toast.success("Login successful");
      setEmail("");
      setPassword("");
      setError("");
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "100px", marginBottom: "100px" }}>
      <Toaster />
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {error && <Typography color="error" align="center">{error}</Typography>}
        <Button
          variant="contained"
          type="submit"
          fullWidth
          style={{ marginTop: "16px" }}
        >
          Login
        </Button>
        <Typography align="center" style={{ marginTop: "16px" }}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default LoginPage;