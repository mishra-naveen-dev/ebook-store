"use client";
import React, { useState } from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    let navigate = useNavigate();

    // Handle Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/customer/register", { name, email, password });
            console.log(response.data);
            toast.success("Registration successful");
            navigate('/login');

            // Reset form and error message on success
            setName("");
            setEmail("");
            setPassword("");
            setError("");
        } catch (err) {
            const errorMessage = err.response ? err.response.data.message : "An error occurred. Please try again later.";
            setError(errorMessage);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "100px", marginBottom: "100px" }}>
            <Toaster />
            <Typography variant="h5" align="center" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    required
                />
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
                    Register
                </Button>
            </form>
        </Container>
    );
};

export default SignUpPage;