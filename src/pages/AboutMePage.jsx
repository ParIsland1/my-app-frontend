// src/pages/AboutMePage.jsx
import React from "react";

const AboutMePage = () => {
    return (
        <div style={{ minWidth: "98vw", minHeight: "100vh", fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <header style={{ textAlign: "center", marginBottom: "30px" }}>
                <h1 style={{ fontSize: "2.5rem" }}>About Me</h1>
                <p style={{ fontSize: "1.2rem", color: "#555" }}>Get to know more about who I am and what I do!</p>
            </header>

            <main>
                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "2rem" }}>Who I Am</h2>
                    <p style={{ fontSize: "1.1rem", color: "#555" }}>
                        My name is Aidan Adams, I am from California and am currently enrolled in classes at UVU for Software Development.
                    </p>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "2rem" }}>What I Do</h2>
                    <p style={{ fontSize: "1.1rem", color: "#555" }}>
                        Right now I am working on finishing a degree so that I can create software.
                    </p>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "2rem" }}>My Interests</h2>
                    <p style={{ fontSize: "1.1rem", color: "#555" }}>
                        My absolute favorite activity in the world is going to the gym everyday. For me it is incredibly fun and serves as a good release of stress and energy.
                    </p>
                </section>
            </main>

            <footer style={{ marginTop: "50px", textAlign: "center", padding: "20px 0", backgroundColor: "#333", color: "#fff" }}>
                <p style={{ margin: "0" }}>© 2025 RHŌMĒ FITNESS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutMePage;
