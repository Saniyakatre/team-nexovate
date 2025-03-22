import React from "react";
import { useNavigate } from "react-router-dom";
import "../LandingPage.css";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <h1>Welcome to Smart Grading</h1>
            <p>Select an option to continue:</p>
            <div className="button-container">
                <button onClick={() => navigate("/register")}>🔑 Sign Up</button>
                <button onClick={() => navigate("/login")}>🔐 Login</button>
                <button onClick={() => navigate("/dashboard")}>🚀 Continue as Guest</button>
            </div>
        </div>
    );
};

export default LandingPage;
