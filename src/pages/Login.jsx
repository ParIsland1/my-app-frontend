import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password);  
        navigate("/");  
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                minWidth: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
            }}
        >
            <div
                style={{
                    width: "400px",
                    padding: "20px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                }}
            >
                <form onSubmit={handleLogin}>  
                    <h1 style={{ marginBottom: "20px", fontSize: "2rem", color: "#333" }}>Login</h1>
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}  
                            onChange={(e) => setUsername(e.target.value)}  
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                fontSize: "1rem",
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                fontSize: "1rem",
                            }}
                        />
                    </div>
                    <button
                        type="submit"  
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#333",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "1rem",
                            cursor: "pointer",
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
