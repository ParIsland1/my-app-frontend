import React, { createContext, useState, useEffect, useContext } from "react";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
                const response = await fetch(`${API_BASE_URL}/cart`);
                if (!response.ok) throw new Error("Failed to fetch cart");
                const data = await response.json();
                setCart(data);
            } catch (error) {
                console.error("Error fetching cart:", error);
                setCart([]); 
            }
        };
        fetchCart();
    }, []);

    
    const addToCart = async (product) => {
        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${API_BASE_URL}/cart`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });
            if (!response.ok) throw new Error("Failed to add to cart");
            const updatedCart = await response.json();
            setCart(updatedCart);
        } catch (error) {
            console.error("Error adding to cart:", error);
            
            setCart(prevCart => [...prevCart, product]);
        }
    };

    // Function to remove an item from the cart
    const removeFromCart = async (id) => {
        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${API_BASE_URL}/cart/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error("Failed to remove from cart");
            const updatedCart = await response.json();
            setCart(updatedCart);
        } catch (error) {
            console.error("Error removing from cart:", error);
            
            setCart(prevCart => prevCart.filter(product => product.id !== id));
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;