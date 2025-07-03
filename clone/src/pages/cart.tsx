 import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "20px",
    maxWidth: "900px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  empty: {
    textAlign: "center",
    fontSize: "18px",
    color: "#888",
  },
  list: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    background: "#fff",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    background: "#f9f9f9",
  },
  details: {
    padding: "10px",
  },
  title: {
    fontSize: "16px",
    height: "50px",
    overflow: "hidden",
  },
  price: {
    fontWeight: "bold",
    margin: "10px 0",
  },
  removeBtn: {
    backgroundColor: "#ff4444",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  totalBox: {
    marginTop: "30px",
    textAlign: "right",
    fontSize: "20px",
    fontWeight: "bold",
  },
};



const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Fetch items from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  // Remove item from cart
  const handleRemove = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total
  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={styles.empty}>Your cart is empty.</p>
      ) : (
        <div style={styles.list}>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.image} alt={item.title} style={styles.image} />
              <div style={styles.details}>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.price}>₹{item.price}</p>
                <button style={styles.removeBtn} onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div style={styles.totalBox}>
          <h3>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;

 

