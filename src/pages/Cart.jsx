import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div style={{ padding: "20px", minHeight: "100vh", minWidth: "100vw" }}>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
                        <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                        <span>{item.name} - {item.type} - {item.size}</span>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            style={{
                                marginLeft: "10px",
                                padding: "5px 10px",
                                backgroundColor: "red",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
