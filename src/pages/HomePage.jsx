import React from "react";
import { Link } from "react-router-dom";
import ShirtImage from "../assets/images/ShirtScreenshot.png";
import BeltImage from "../assets/images/BeltScreenshot.png";

const HomePage = () => {
    return (
        <div style={{ minWidth: "98vw", minHeight: "100vh", padding: "20px" }}>
            <header style={{ textAlign: "center", padding: "20px 0", backgroundColor: "#333", color: "#fff" }}>
                <h1 style={{ margin: "0", fontSize: "2.5rem" }}>RHŌMĒ FITNESS</h1>
                <p style={{ margin: "0", fontSize: "1.2rem" }}>The ultimate destination for fitness and workout gear</p>
            </header>

            <main style={{ marginTop: "30px" }}>
                <section style={{ marginBottom: "30px", textAlign: "center" }}>
                    <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Find the Right Equipment for You</h2>
                    <p style={{ fontSize: "1.1rem", color: "#555" }}>
                        From dumbbells to yoga mats, we’ve got everything to support your fitness journey.
                    </p>
                </section>

                <section style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                    <Link to="/men" style={{ textDecoration: "none", flex: "1 1 calc(33.333% - 20px)" }}>
                        <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px", textAlign: "center", cursor: "pointer" }}>
                            <img
                                src={ShirtImage}
                                alt="Shirt"
                                style={{ maxHeight: "50%", maxWidth: "50%", borderRadius: "8px" }}
                            />
                            <h3 style={{ margin: "15px 0", fontSize: "1.5rem", color: "black" }}>Men</h3>
                            <p style={{ color: "#777" }}>High-quality fabrics meant to withstand any intense workout routine.</p>
                        </div>
                    </Link>

                    <Link to="/women" style={{ textDecoration: "none", flex: "1 1 calc(33.333% - 20px)" }}>
                        <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px", textAlign: "center", cursor: "pointer" }}>
                            <img
                                src={ShirtImage}
                                alt="Shirt"
                                style={{ maxHeight: "50%", maxWidth: "50%", borderRadius: "8px" }}
                            />
                            <h3 style={{ margin: "15px 0", fontSize: "1.5rem", color: "black" }}>Women</h3>
                            <p style={{ color: "#777" }}>Incredible designer clothing made to slay in the gym.</p>
                        </div>
                    </Link>
                </section>

                <section style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", marginLeft: "25%", marginRight: "25%", marginTop: "25px" }}>
                    <Link to="/equipment" style={{ textDecoration: "none", flex: "1 1 calc(33.333% - 20px)" }}>
                        <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px", textAlign: "center", cursor: "pointer" }}>
                            <img
                                src={BeltImage}
                                alt="Lifting Equipment"
                                style={{ maxHeight: "25%", maxWidth: "25%", borderRadius: "8px" }}
                            />
                            <h3 style={{ margin: "15px 0", fontSize: "1.5rem", color: "black" }}>Lifting Equipment</h3>
                            <p style={{ color: "#777" }}>Portable and effective tools/accessories for strength training.</p>
                        </div>
                    </Link>
                </section>

                <section style={{ marginTop: "40px", textAlign: "center" }}>
                    <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Stay Motivated</h2>
                    <p style={{ fontSize: "1.1rem", color: "#555" }}>
                        Subscribe to our newsletter for workout tips, exclusive discounts, and more!
                    </p>
                    <form style={{ marginTop: "15px" }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                padding: "10px",
                                width: "300px",
                                border: "1px solid #ddd",
                                borderRadius: "4px",
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: "10px 20px",
                                marginLeft: "10px",
                                backgroundColor: "#333",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                </section>
            </main>

            <footer style={{ marginTop: "50px", textAlign: "center", padding: "20px 0", backgroundColor: "#333", color: "#fff" }}>
                <p style={{ margin: "0" }}>© 2025 RHŌMĒ FITNESS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;