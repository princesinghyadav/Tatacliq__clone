import React, { useState, useEffect } from "react";
 
export default function Success () {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    paymentMethod: "UPI",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
 const random10DigitNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Shipping Details:", formData);
    console.log("Cart Items:", cartItems);
    localStorage.removeItem("cartItems");
    setOrderPlaced(true);
    
     
  }

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Checkout Page</h2>
      {orderPlaced ? (
        <div style={{ textAlign: "center", marginTop: "20px", color: "green" }}>
          <h3>🎉 Order Placed Successfully!  {random10DigitNumber}</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <h3>Shipping Details</h3>
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required style={inputStyle} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required style={inputStyle} />

            <label style={{ marginTop: "10px" }}>
              Payment Method:
              <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} style={inputStyle}>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </label>

            <button type="submit" style={buttonStyle}>Place Order</button>
          </div>

          <div style={{ flex: 1 }}>
            <h3>Cart Summary</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cartItems.map((item) => (
                <li key={item.id} style={{ marginBottom: "10px" }}>
                  <strong>{item.title}</strong>
                  <div>Price: ₹{item.price}</div>
                  <div>Quantity: {item.quantity || 1}</div>
                </li>
              ))}
            </ul>
            <h4>Total: ₹{totalPrice.toFixed(2)}</h4>
          </div>
        </form>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "10px",
};
