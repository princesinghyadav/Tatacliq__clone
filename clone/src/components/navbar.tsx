 


import CategoryMenu from "@/pages/categorymenu";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const words = ["products", "brands", "categories"];

const Navbar = () => {
    const navigate= useNavigate()
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbar">
      <div className="logo"  onClick={()=>navigate('/')}>
        <span className="cliq">TATA CLiQ</span>
        <span className="fashion">FASHION</span>
      </div>

      <div className="menu">
         <div className="app-container">
      <div
        className="hover-category"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <span>Category</span>

        {showMenu && (
          <div className="menu-wrapper" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
            <CategoryMenu />
          </div>
        )}
      </div>
    </div>
        <div className="menu-item">
          Brands <span className="arrow">▼</span>
        </div>
      </div>

      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          placeholder={`Search for ${words[placeholderIndex]}`}
        />
      </div>

      <div className="right-links">
        <span>CLiQ Cash</span>
        <span>Gift Card</span>
        <span>CLiQ Care</span>
        <span>Track Orders</span>
        <span onClick={()=> navigate('/signup')}>Sign in / Sign Up</span>
        <span>🤍</span>
        <span onClick={()=> navigate('/cart')}>🛒</span>  
      </div>
    </div>
  );
};

export default Navbar;
