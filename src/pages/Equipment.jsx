import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ShirtImage from "../assets/images/ShirtScreenshot.png";
import JoggerImage from "../assets/images/JoggerScreenshot.png";

const Equipment = () => {
    const { addToCart } = useContext(CartContext);
    const [equipment, setEquipment] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEquipment = async () => {
            try {
                const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
                const response = await fetch(`${API_BASE_URL}/products`);
                if (!response.ok) throw new Error("Failed to fetch equipment");
                const data = await response.json();
                // Map API data to include images and filter for equipment
                const mappedEquipment = data.map(product => ({
                    ...product,
                    image: product.name.includes("Shirt") ? ShirtImage : JoggerImage,
                }));
                setEquipment(mappedEquipment);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching equipment:", error);
                setLoading(false);
            }
        };
        fetchEquipment();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{ minWidth: "98vw", minHeight: "100vh", padding: "20px" }}>
            <header style={{ textAlign: "center", marginBottom: "30px", backgroundColor: "#333", color: "#fff" }}>
                <h1 style={{ fontSize: "2.5rem" }}>Equipment</h1>
                <p style={{ fontSize: "1.2rem" }}>Portable and effective tools/accessories for strength training.</p>
            </header>

            <main style={{ backgroundColor: "white", display: "flex", rowGap: "10px" }}>
                {equipment.map((item, index) => (
                    <div key={index} style={{ flex: "1 1 calc(33.333% - 20px)", background: "#f9f9f9", padding: "20px", borderRadius: "8px", textAlign: "center", margin: "10px" }}>
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{ maxWidth: "100%", borderRadius: "8px" }}
                        />
                        <h3 style={{ margin: "15px 0", fontSize: "1.5rem" }}>{item.name}</h3>
                        <p style={{ color: "#777" }}>Portable and effective tools/accessories for strength training.</p>
                        <button
                            onClick={() => addToCart(item)}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#333",
                                marginTop: "50px",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </main>

            <footer style={{ marginTop: "50px", textAlign: "center", padding: "20px 0", backgroundColor: "#333", color: "#fff" }}>
                <p style={{ margin: "0" }}>© 2025 RHŌMĒ FITNESS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Equipment;