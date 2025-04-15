import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Equipment from "./pages/Equipment";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <Navbar />  
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about-me" element={<AboutMePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/men" element={<Men />} />
                        <Route path="/women" element={<Women />} />
                        <Route path="/equipment" element={<Equipment />} />
                        <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
                    </Routes>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
};


const Navbar = () => {
    const { isAuthenticated, username, logout } = useAuth();

    return (
        <nav style={{
            backgroundColor: "#333",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0 }}>
                <li><Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "1.2rem" }}>Home</Link></li>
                <li><Link to="/about-me" style={{ color: "white", textDecoration: "none", fontSize: "1.2rem" }}>About Me</Link></li>
            </ul>

            <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0 }}>
                {isAuthenticated ? (
                    <>
                        <li style={{ color: "white", fontSize: "1.2rem" }}>Welcome, {username}!</li>
                        <li>
                            <button
                                onClick={logout}
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 12px",
                                    borderRadius: "5px",
                                    cursor: "pointer"
                                }}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <li><Link to="/login" style={{ color: "white", textDecoration: "none", fontSize: "1.2rem" }}>Login</Link></li>
                )}
                <li><Link to="/cart" style={{ color: "white", textDecoration: "none", fontSize: "1.2rem" }}>Cart</Link></li>
            </ul>
        </nav>
    );
};

export default App;
